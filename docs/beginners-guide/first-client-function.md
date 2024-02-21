# Finding your first function on the client

This guide is meant as a beginners introduction into using IDA to be able to find functions on the client, where there are no symbols. To follow this guide you will need to have already analysed the `Windows Client` and `Windows BDS`, or to save time you can download pre-analysed versions [here](https://www.mediafire.com/folder/ammda8wfvbw9x/The_Flopper_Databases).

## Navigating IDA 

In the database for BDS, we will navigate to the function `Item::Item`. To do this first right click in the list of functions and hit `Modify Filters`.

![modify filters option](/beginners-guide/first-client-function/modify-filters.png)

Enable the `Regular Expression` option, type `^Item::`, and hit add. This will find all functions that are in the `Item` class.

![filtering for item](/beginners-guide/first-client-function/item-filter.png)

Close the filter window, and in the list of functions find `Item::Item` in the list, and double click it. This will take you to the function in an `IDA View` window, which shows the assembly of the function. To make it more understandable, we can dissasemble the function by hitting `F5`, whilst also having the function selected in the `IDA View` window.

## Looking for identifyable information

In the pseudocode window, we can identify some information about this function. The first thing we can see the function definition itself `_QWORD *__fastcall Item::Item(_QWORD *a1, _QWORD *a2, __int16 a3)`, we can see that it takes in 3 parameters.

Scrolling down in the pseudocode window, we can also see that this function uses two strings `atlas.items` and `minecraft`.

![strings in item](/beginners-guide/first-client-function/item-ctor-strings.png)

## Finding the function on the client

Open up your database for the client in another instance of IDA, we can do a search for strings and where they are used, to do this at the top of your screen under `Search` click `Sequence of bytes...`. In the window enter `"atlas.items"`, leave the default options, and click OK. In the list, there should only be one result, so double click it. Next hover over the strings name `aAtlasItem` and press `X`, this will bring up a list of "xrefs" (cross references), which is a list of functions where this string is being used.

![opening xrefs for atlas.items](/beginners-guide/first-client-function/atlas-item-strings-client.png)

When doing the search on bds for the string `atlas.items`, we can see that the string referenced exactly once by the Item constructor. 

![bds xrefs for atlas.items](/beginners-guide/first-client-function/atlas-item-strings-bds.png)

This is different to the client where the string is referenced 6 times. The difference in the amount of xrefs is likely because of functions that are only on the client, and therefore aren't on the server.

## Identifying which functions it isn't

Looking at the list of xrefs for the string on client, we can immediately disregard the first 3 xrefs due to it all being the same function, as we know from earlier the Item constructor only references the string once. When looking at the list of xrefs we only need to look at the function name, and not the information after a `+` or a `:`, as this is just saying where in the function it is being used.

![what to look at](/beginners-guide/first-client-function/xrefs-what-to-lookat.png)

This leaves us with exactly three options for functions that `Item::Item` could be on the client. Since we have such a small amount of functions to go through, we can look at each one individually and see if we can rule them out. We can navigate to the function by double clicking it, then go into the pseudocode window by hitting `F5`. 

Searching from top to bottom:

- We can rule out the first of the three candidates, as we can see that it uses the string `"textures/particle/particles"`, which the item constructor does not use.

- We can also rule out the second of the three, for the same reason, as it uses the string `"textures/items/recovery_compass_atlas"`

This leaves us with exactly one function left that it can be, and therefore we have now found the constructor on the client! In the pseudocode window for the last function we can also see that the parameters for this function lines up too `_QWORD *__fastcall sub_1429DA770(__int64 a1, _QWORD *a2, __int16 a3)`

## Labeling the function

Now that we have found the constructor for the Item class on the client, we can copy its symbol over from BDS. In the pseudocode window for the function on BDS, click on the name and hit `n` and copy its existing name. Next in the pseudocode for the client, again hit `n` on the name, and paste in that symbol `??0Item@@QEAA@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@F@Z`