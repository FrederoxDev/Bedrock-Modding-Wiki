# Hook a function

> [!IMPORTANT]
> This article is a continuation of the previous articles in the Beginners' Guide series, and makes the assumption that you have already setup a mod as shown in [3 - Building Amethyst](/beginners-guide/setup-dev-env.md)

Using the vtable for Item we found in [*2 - Find functions from a vtable*](/beginners-guide/functions-from-a-vtable.md), lets find the virtual function `appendFormattedHovertext`. First, open BDS and locate the function inside the Item::vftable, and calculate its virtual index.

For a reminder on how to do that you can always return back to the [*2 - Find functions from a vtable*](/beginners-guide/functions-from-a-vtable.md) guide. For 1.21.0.3, we can calculate the index is `48` , now back on the client, find the `48th` entry in the vtable, then re-name and open it in the Pseudocode window.

## How do we identify this function in a mod?

To identify functions, we can use something called a **signature**, these can be made using the bytes of a function, since the majority of functions will have a unique order of bytes we can use to identify it. Luckily, we don't need to look at the bytes of the function ourselves, instead we can just use a signature generator plug-in inside of IDA.

It is highly likely that this signature generator plug-in will come with your installation of IDA, but in the case where it doesn't you can get the plug-in [here](https://github.com/A200K/IDA-Pro-SigMaker).

## Generating a signature

> [!IMPORTANT]
Inside of the pseudocode window, ensure your cursor is selected on the function name. This is important to make sure that we are taking a signature at the beginnining of the function.

![](/beginners-guide/hook-a-function/cursor-on-start.png)

Next, hit the key combination `Ctrl + Alt + S` or alternativly press `Edit > Plugins > Signature Maker`, and leave the default options provided, as shown in the screenshot below.

![](/beginners-guide/hook-a-function/signature-maker-options.png)

Finally then press `OK`. Next look for the `Output` window, inside the signature for this function should be printed.

![](/beginners-guide/hook-a-function/signature-output.png)