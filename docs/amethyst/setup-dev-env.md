# Building Amethyst

This guide will help you setup [Amethyst](https://github.com/FrederoxDev/Amethyst) locally. There are a few pre-requisites here to getting started.

- The first thing you will need to setup is [Visual Studio](https://visualstudio.microsoft.com/vs/community/), download the latest release as well as the `Desktop Development with C++` workload under the modify window.

![](/amethyst/setup-dev-env/required_workloads.png)

- Secondly you will need to setup an assembly compiler called [NASM](https://nasm.us/), download the latest stable release. You will need to manually add NASM to your path environment variables. The default install directory is at `C:\Program Files\NASM`.

## Cloning and Building

In a directory of your choice run the [git](https://git-scm.com/downloads) command to locally clone the Amethyst repo:
```sh
git clone https://github.com/FrederoxDev/Amethyst.git
```

Next, you will need to make an environment variable that points to this source directory called `amethyst_src`. This will allow for any locally built mods to directly access the source files of AmethystAPI.

![](/amethyst/setup-dev-env/amethyst_env.png)

Now to build AmethystRuntime, open the CMake-gui (This should have been installed with the c++ workload with visual studio earlier). In the first field enter the path to the Amethyst directory, and then in the second field that same path with `/build` appended to the end.

![](/amethyst/setup-dev-env/amethyst_path.png) 

From here, hit the three buttons at the bottom of cmake-gui from left-to-right, leaving all of the default options. Now you will have a `.sln` of AmethystRuntime, finally just hit `Ctrl + Shift + B` to build the project.