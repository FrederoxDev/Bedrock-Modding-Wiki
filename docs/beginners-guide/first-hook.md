# Create your first hook

## Gathering information

In this guide, we will cover the basics of modifying the behaviour of a function. Let's start off by trying to find `Item::appendFormattedHovertext`. First search for the function on BDS, in the main viewport we can see that this function is virtual. Because of this we will be able to identify the function on the client through its vtable, which we found in the [previous guide](/beginners-guide/functions-from-a-vtable.md).

![](/beginners-guide/first-hook/append-is-virtual.png)

## Finding offsets

![](/beginners-guide/first-hook/vtable-start-addr.png)

Start off by navigating to the `Item` vtable on BDS, and take a note of the vtable start address and scroll through the vtable until you find the symbol beginning with `?appendFormattedHovertext`, and make a note of its address. 

![](/beginners-guide/first-hook/append-formatted-addr.png)

To determine the offset of the virtual function in the vtable, use `function_address - vtable_start`. In the case of this version we would do `0x142B26AA8 - 0x142B26930`, however keep in mind that these addresses will change for each version.

> [!TIP]
> A useful tool to quickly compute hexidecimal equations is [SpeedCrunch](https://heldercorreia.bitbucket.io/speedcrunch/). It allows for simple equations, converting between formats, storing numbers in variables for later use, and more.

## Identifying it on the client

To find the function on the client, take the address of the Item vtable on the client and add the offset we calculated from BDS above. To avoid scrolling to the function, hit `G`and enter the resulting address to instantly jump to it. 

On BDS, right click `?appendFormattedHovertext`, hit rename and copy the symbol. Back on the client, hit rename and paste in the symbol.

![](/beginners-guide/first-hook/labeled-append.png)