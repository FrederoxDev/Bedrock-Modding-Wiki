# Configuring your compiler

## Picking a Compiler

Depending on what platform(s) you want to target for your Minecraft: Bedrock Edition mod, you'll have to use the correct
compiler and standard template library ([STL](https://en.wikipedia.org/wiki/Standard_Template_Library)) for complete ABI
compatibility for both language features and library features.

The following table serves as a rough guide for which compiler you'll want to use for a given Bedrock platform. It's not
exact, nor complete (for now):

| Platform | Compiler | STL           |
|:---------|:---------|:--------------|
| Windows  | MSVC     | Microsoft STL |
| Android  | GCC      | libstdc++     |
| OSX/iOS  | Clang    | libc++        |

Generally, it should be fine to use the latest releases of both the compiler and STL provided by the table. If any
notable incompatibilities are found in the future, the table will be updated accordingly.

## Clang on Windows

The Clang compiler supports [ABI compatibility with MSVC](https://clang.llvm.org/docs/MSVCCompatibility.html). While it
is not fully compatible, it is in a state that is acceptable for most applications, including developing mods for
Minecraft: Bedrock Edition.

This is best done through the `clang-cl.exe` driver program, which is a "drop-in" replacement for MSVC's `cl.exe`.

### Incompatibilities

A common issue that is encountered when using Clang instead of MSVC is the incompatibility with `entt::type_hash`.
To address this issue, see [Type Hashes](/advanced-topics/entt.html#type-hashes).

### Using Visual Studio

> TODO

### Using CLion

> TODO
