# Finding virtual functions through a vtable

One of the easiest ways to identify a bunch of functions, for most classes that are both on the client and server, is through a "vftable / vtable" (virtual function table). For a vtable to be present in the class, the class must use `virtual` functions.

In the last guide we identified the constructor for the `Item` class, we can use this to easily find the vtable on the client. In a constructor, the first parameter passed in the constructor is a pointer to `this`, in the parameters for `Item::Item` the `this` parameter is `a1`: `Item *__fastcall Item::Item(__int64 a1, _QWORD *a2, __int16 a3)`.

For classes which inherit from only one or no classes, the vtable address will be stored at an offset of 0 from the `this` ptr. So to find the vtable for the class we can look for the line `*a1 = &off_1453C9B70;`.

![bds xrefs for atlas.items](/beginners-guide/functions-from-a-vtable/vtable_offset.png)

If we also open the vtable on the server, we can directly copy the order of the functions directly from bds onto the client. In red, the index of the functions has been labeled, typically in a vtable at index 0 you will have the destructor for the class, which is then followed by the rest of the virtual functions for the class.

![vfuncs on bds](/beginners-guide/functions-from-a-vtable/vtable_order.png)

So for example: if we wanted to find the `Item::initServer` function on the client, we could look at where it is in the bds vtable (at index 1), and name the function at the same location on the client.

![labeling a vfunc](/beginners-guide/functions-from-a-vtable/labeled_vfunc.png)