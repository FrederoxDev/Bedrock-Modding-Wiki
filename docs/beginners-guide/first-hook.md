# Create your first hook

## Finding our function

Let's start off by trying to find the `virtual` function `Item::appendFormattedHovertext`, start off by navigating to the `Item` vtable on the **Windows Server.**

![](/beginners-guide/first-hook/vtable-start-addr.png)

Take a note of the vtable start address, next scroll through the vtable until you find a symbol beginning with `?appendFormattedHovertext...`, and make a note of its address too. 

![](/beginners-guide/first-hook/append-formatted-addr.png)

Now, to determine the offset of the virtual function in the vtable use `function_address - vtable_start`. In the case of this version we would do `0x142B26AA8 - 0x142B26930`, however these addresses will change for each version.

> [!TIP]
> A useful tool to quickly compute hexidecimal equations is [SpeedCrunch](https://heldercorreia.bitbucket.io/speedcrunch/). It allows for simple equations, converting between formats, storing numbers in variables for later use, and more.

## Finding on the client

To find the function on the client, take the address of the Item vtable on the client and add the offset we calculated from BDS above.To avoid scrolling to the function, hit `G`and enter the resulting address. 

Next on BDS, right click `?appendFormattedHovertext...` and hit rename, copy the symbol and hit cancel. Next back on the client, at the resulting address, hit rename and paste in that symbol.
