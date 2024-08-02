# Vtables

> [!WARNING]
> Article is not complete, and is just up to get feedback right now. If there are areas of this article which you find hard to understand, please send me a message on discord on the parts which were unclear so i can improve the article

> [!INFO]
> This article covers a topic that typically does not need to be thought about while programming, however in modding, it is important to understand how c++ compilers implement virtual functions under the hood.

Let's start off with some example code, where we have two classes, where `class Cat` is inheriting from `class Animal`

```c++
class Animal {
public:
    virtual ~Animal() = default;

    virtual std::string getName() const {
        return "<unknown animal>";
    };

    virtual int getPopulation() const {
        return 0;
    }
};
```
```c++
class Cat : public Animal {
public:
    virtual ~Cat() = default;

    virtual std::string getName() const override {
        return "<cat>";
    }
};
```

Notice how in our base class Animal, we declare a virutal function `getName` which returns a generic string name, whereas in our class Cat, we override this function to return a more specific string.

## Why do vtables exist?

Say that we want to call this `getName` function for each element of a `std::vector<std::shared_ptr<Animal>>`, how does the c++ compiler know what function it should be calling each time? 

```c++
// Add instances of Animal and Cat to a vector
std::vector<std::shared_ptr<Animal>> animals = {};
animals.push_back(std::make_shared<Animal>());
animals.push_back(std::make_shared<Cat>());

// Call our getName function on each element in the vector
for (const auto& animal : animals) {
    Log::Info("name: '{}'", animal->getName());
}
```
```rs
[INFO] name: '<unknown animal>'
[INFO] name: '<cat>'
```

## How does the compiler know what function to call?

To implement this, the c++ compiler adds a new hidden pointer to the beginning of the class, which points to a classes virtual function table, or vftable/vtable for short. Inside of this vtable, it contains pointers to all virtual functions associated with the class:

```c++
struct Animal::vftable {
    void* destructor;    // Animal::~Animal();
    void* getName;       // Animal::getName();
    void* getPopulation; // Animal::getPopulation();
};
```
```c++
struct Cat::vftable {
    void* destructor;    // Cat::~Cat();
    void* getName;       // Cat::getName();
    void* getPopulation; // Animal::getPopulation();
};
```

- The first thing to notice, is that the virtual functions for both of these classes are in completely identical order.

- However, take a look at the `getName` and the destructor, and you will see that both contain pointers to that classes specific implementation of the function.

- Lastly, take a look at the `getPopulation` function, you will notice that in both vtables, it still points to the original `Animal::getPopulation` implementation. That is because in our class Cat, we do not override this function and so it uses the one from the original class.

## Hidden vftable pointers
As mentioned earlier, a hidden pointer is placed at the very beginning of the class to its vftable.

```c++
class Animal {
public:
    Animal::vftable* vtbl; // <- Compiler generated pointer to the vftable
                           // placed exactly at the beginning of the class
                           // before any member variables
}
```
```c++
class Cat : public Animal {
public:
    Cat::vftable* vtbl; // <- Notice how the pointer has been replaced with a
                        // pointer to the vftable which is owned by cat
}
```

## Calling virtual functions

And so, going back to our example earlier, where we were iterating each animal in a vector, under the hood, it actually looks more like this:

```c++
for (const auto& animal : animals) {
    Log::Info("name: '{}'", animal->vtbl->getName());
                                // ^ finds the function pointer inside of 
                                // the vftable and calls that function,
                                // without having to know what the type of
                                // animal actually is.
}
```

Since when we inherit a class, we replace the vtable pointer, with a pointer to the new classes vtable, this handles switching what function gets called automatically, without the compiler having to know the types of each pointer in the vector.