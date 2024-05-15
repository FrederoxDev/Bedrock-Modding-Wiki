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

Open the Visual Studio Installer and select "Modify" on your installation.

![vs installer modify](/beginners-guide/configuring-your-compiler/vs-installer-modify.png)

Click on "Individual Components" at the top and search for "LLVM". Make sure that both "C++ Clang Compiler for Windows"
and "MSBuild support for LLVM" are selected.

![vs installer llvm](/beginners-guide/configuring-your-compiler/vs-installer-llvm.png)

Click "Modify" in the bottom right and wait for the installation to complete.

![vs installer finish](/beginners-guide/configuring-your-compiler/vs-installer-finish.png)

***If you are using a Microsoft Visual Studio Project (MSBuild)***:

Open Microsoft Visual Studio and navigate to `Project > [Your Project Name] Properties`

![vs project properties](/beginners-guide/configuring-your-compiler/vs-project-properties.png)

Select "LLVM (clang-cl)" from the "Platform Toolset" dropdown.

![vs platform toolset](/beginners-guide/configuring-your-compiler/vs-properties-toolset.png)

***If you are using a CMake project***:

Click on "Manage Configurations" under the build type dropdown.

![vs manage configurations](/beginners-guide/configuring-your-compiler/vs-manage-configurations.png)

Select `clang_cl_x64` for the desired build configurations.

![vs configurations toolset](/beginners-guide/configuring-your-compiler/vs-configurations-toolset.png)

### Using CLion

> TODO
