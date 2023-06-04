# 2 - First Project

Pages 2 and 2.1 will show you how to make a simple mod to print "Hello World!" to the console, it is recommended that you follow from here, as later pages will be building off of this.  

## Setting up the project
Zenova Launcher supplies a [Mod Template](https://github.com/MinecraftZenova/Template), to get started open up a command line and run. This will create a new folder called `Template` in your current directory
```ps
git clone https://github.com/MinecraftZenova/Template.git
cd Template
rmdir /s /q .git
git init
```

1. Next open up the CMake Gui tool. Next set the source code location to your new `Template` folder, next set the build location to `Template/build` (Make sure to include the full path).

2. In the bottom left hit configure, set the `Optional platform` to `x64`, and press `Finish` and wait for it to finish.

3. Next click `Generate` and then `Open Project`, this will then open inside of Visual Studio.