# Signatures

To identify a function from within a mod, we can use something called a **signature**, a signature of a function is made by looking at the bytes of a function, and finding a section of bytes that is completely unique to this function. Luckily, we don't need to look at the bytes of the function ourselves, instead we can just use a signature generator plug-in inside of IDA.

It is highly likely that this signature generator plug-in will come with your installation of IDA, but in the case where it doesn't you can get the plug-in [here](https://github.com/A200K/IDA-Pro-SigMaker).

## Generating a signature

> [!IMPORTANT]
Inside of the pseudocode window, ensure your cursor is selected on the function name. This is important to make sure that we are taking a signature at the beginnining of the function.

![](/concepts/signatures/cursor-on-start.png)

Next, hit the key combination `Ctrl + Alt + S` or alternativly press `Edit > Plugins > Signature Maker`, and leave the default options provided, as shown in the screenshot below.

![](/concepts/signatures/signature-maker-options.png)

Finally then press `OK`. Next look for the `Output` window, inside the signature for this function should be printed. Simply from here just copy out your signature, and you're done!

![](/concepts/signatures/signature-output.png)

## Why use a signature?

Signatures are quite useful because they can be used to identify the same function across multiple versions of the game, assuming that the function itself wasn't modified between the two versions. For that exact reason, they are much better than using hardcoded addresses since those will always break between version.

## When shouldn't you use a signature?

Take the example where you have function A and function B, both functions are very similar

```c++
void functionA(int a) {
    return a + a + 5;
}

void functionB(int b) {
    return b + b + 6;
}
```

In this scenario these functions would have nearly identical signatures, which means that the two signatures enter what is almost a "race" and continously grow in size. This can be an issue when it is a larger function with more functionality, the signatures can end up growing over 1000 bytes long. Generally this is a good scenario to just use a hardcoded address, since a signature of that size is awkward to work with.