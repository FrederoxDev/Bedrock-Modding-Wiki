To get started you will need to get a copy of the Bedrock Server for Ubuntu for the version `1.14.60.5`

## Tool Setup
1. Firstly you will need to install Windows Subsystem for Linux You can find a guide here: [Install WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/install) 
2. Next run `wsl --install -d Ubuntu` to install the version of Ubuntu we will use. 
3. Once you have got Ubuntu running and have created your user, install GDB with `sudo apt-get install gdb` to install their pre-made binary.

## Using GDB
1. To run GDB simply run `gdb` to enter the debugging mode, and run `file "/mnt/c/<Your path on Windows to the Linux bedrock server>"` to load the symbols from the file into GDB, and wait for it to finish.
2. Next run `set pagination off` to allow GDB to print without pausing on large types
3. Now to access Member Variables, Enums, and Structs you can use the `ptype` command followed by the name of the type. For example if you wanted to access the member variables of the `Item` class you would run `ptype Item`