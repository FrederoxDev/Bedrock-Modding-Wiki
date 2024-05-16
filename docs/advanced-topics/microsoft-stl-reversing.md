# Microsoft STL Reversing

## Identifying Types

### `std::unique_ptr`

*Disclaimer: This section is currently incomplete, and branches off of the
[reversing members](/advanced-topics/entt.html#reversing-members) section of the EnTT guide.*

Here's the relevant code snippet from the Microsoft [STL](https://github.com/microsoft/STL/blob/8dc4faadafb52e3e0a627e046b41258032d9bc6a/stl/inc/memory#L3408)
implementation, with added comments for clarification:
```C++
_CONSTEXPR23 ~unique_ptr() noexcept {
    // _Mypair is a pair consisting of a deleter function and a pointer
    // to the owned object. (For deleter types that are 0 size, no actual
    // deleter instance is stored, just the pointer to the object).

    // This check validates that the owned object is not null
    if (_Mypair._Myval2) {
        // And this invocation passes the pointer
        // to that object to the deleter function.
        _Mypair._Get_first()(_Mypair._Myval2);
    }
}
```
But why is there an additional `1i64` argument in the `pop_all` pseudocode? It's actually the result of the "vector
deleting destructor" that is synthesized by the MSVC compiler. This destructor is referenced at the destructor index
(most commonly 0) in the virtual function table. Here's what the implementation looks like in `SimplePlayerContainer`,
which derives from `SimpleContainer`:

![SimplePlayerContainer destructor](/advanced-topics/entt/SimplePlayerContainer-destructor.png)

The argument of `1i64` means that `std::_Return_temporary_buffer<unsigned int>` is called, which in-turn calls
`operator delete`, the final step of destroying the `unique_ptr`.
