# Signatures

To identify a function from within a mod, we can use something called a **signature**, a function's signature is made by looking at the bytes of a function, and finding a section of unique bytes to this function. Luckily, we don't need to look at the bytes of the function ourselves, instead, we can use a signature generator plug-in inside of IDA.

A signature generator plug-in will likely come with your installation of IDA, but in the case where it doesn't you can get the plug-in [here](https://github.com/A200K/IDA-Pro-SigMaker).

## Generating a signature

> [!IMPORTANT]
Inside the pseudocode window, ensure your cursor is selected on the function name. It is important to ensure that you generate a signature at the beginning of the function.

![](/concepts/signatures/cursor-on-start.png)

Next, hit the key combination `Ctrl + Alt + S` or press `Edit > Plugins > Signature Maker`, and leave the default options provided, as shown in the screenshot below.

![](/concepts/signatures/signature-maker-options.png)

Finally, then press `OK`. Next look for the `Output` window, inside the signature for this function should be printed. Simply from here, copy your signature, and you're done!

![](/concepts/signatures/signature-output.png)

## Why use a signature?

Signatures are quite useful because they can identify the same function across multiple versions, assuming that the function itself wasn't modified between the two versions. For that exact reason, they are much better than using hardcoded addresses since those will always break between versions.

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

In this scenario, it is common for the two functions to have nearly identical signatures, meaning the first unique could be 1000s of bytes into the function. Generally, this is a good scenario to use a hardcoded address, since a signature of that size is awkward to work with.