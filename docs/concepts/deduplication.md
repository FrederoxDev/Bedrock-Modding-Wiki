# Deduplication

> [!INFO]
> This article covers deduplication, this topic is specific to MSVC and is not present on other compilers used by Mojang. This means that this topic only affects **Windows** builds of the game.

Deduplication is when the compiler merges two **identical** functions into one shared function. Take the example where we have two functions:
```c++
struct StructA {
    /** this + 0 */ uint32_t mFoo;
    /** this + 4 */ uint32_t mBar;
    /** this + 8 */ std::string mImportantInfo;
};

const std::string& FunctionA(StructA& v) {
    return v.mImportantInfo;
}
```
```c++
struct StructB {
    /** this + 0 */ uint64_t mBaz;
    /** this + 8 */ uint64_t mData;
};

const uint64_t& FunctionB(StructB& v) {
    return v.mData;
}
```

While not completely obvious, these two functions are identical at an assembly level, lets take a look in an online compiler called Godbolt. This compiler allows us to directly see the output of compiling the two functions

![](/concepts/deduplication/godbolt_identical_asm.png)

### Why does this work?

- First, both functions take in 1 argument, which is a reference. This is important because references will always have the same size in bytes, so no matter the size of the underlying type, so the registers used for each parameter will be identical.

- From here, both of the functions access a member variable which has an offset of 8 bytes from the reference passed in.

- Lastly, both functions return a reference to that member variable (again, references always have the same size).

Since the assembly of the two functions are identical, the compiler can save file space by merging them both into one.

## How does deduplication effect Modding?

### Limitations when Hooking:

Deduplication can be harmful in situations where we want to modify one function but not the other. Say we wanted to hook `FunctionA` from the example provided earlier, since they were identical, they got merged into one. This means that if we modify `functionA`, this will unintentionally have the side effect of modifying `FunctionB` as well, when this may not be wanted by the modder.

### Limitations of IDA and other RE programs:

When two functions get merged into one, this means that in the debugging info an address could have multiple symbols associated with it. Tools like IDA can often only show one associated symbol to an address, this can be an issue when looking at the order of virtual functions in a vtable for example, where IDA shows one symbol repeated again and again, rather than the real symbol for the function at that address (if it wasn't for merging).

![](/concepts/deduplication/repeated_symbols.png)

Above is shown the Item vtable, where a seemingly unreleted symbol for `JsonDefinitionSerializer` is repeated again and again. Taking a look inside of this function, it is obvious why the compiler was able to re-use this function so much, as it is a single line function `return false;`

![](/concepts/deduplication/deduplicated_code.png)