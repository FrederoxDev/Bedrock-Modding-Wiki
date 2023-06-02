To get started you will need a copy of `Mac Education Edition` specifically version `1.14.70`. Additionally you also will need to get a copy of the `Bedrock Server for Windows` specifically version `1.14.60.5`. Lastly you will also need to have a copy of the `Windows Client` specifically version `1.14.60.5`.

## Tool Setup
1. You will need to have all versions analysed in Ghidra (Which may take a little while, ~6hrs per version on an Intel Core i3-1005G1 CPU) 
2. Next download the latest versions of the scripts from [FrederoxDev/Bedrock-GhidraScripts](https://github.com/FrederoxDev/Bedrock-GhidraScripts) and place them into Ghidra's script directory. The scripts will be in the `Script Manager` under the category `Bedrock`

## Dumping vtable order
1. Firstly navigate to the class you want to generate in the `SymbolTree` inside of the `Mac Edu edition` and find `vtable` under it.
2. Next copy the very first address from the `listing` in the vtable underneath `PTR_<class name>` and paste it into notepad for later. Next copy the last address in the vtable and paste it into notepad.
3. Open the Script Manager and locate `ExtractVtableOrder.py` and run it. When the script runs it will prompt you for the first address you copied, and then the last address you copied. 
4. It will then prompt you for the class name, make sure to write it identically. And if it inherits from another class enter all the inherited class names, separated by comma's, if it does not inherit simply enter a space and continue.
5. The script will then write a file at `Desktop\HeaderOut\dumpedVtable.json` which will be needed for the next steps.

## Generating header and symbol map
1. Firstly open up the `Script Manager` in your Ghidra project for the bedrock server, and find the `GenerateHeader.py` script and run it. it will take a little longer than the last script, but likely no longer than ~30 seconds.
2. The script will then write two files `Desktop\HeaderOut\<class name>.h` and `Desktop\HeaderOut\<class name>.json`. The header file you can place into your Minecraft header's folder and the JSON file you can place into your symbol maps folder.
3. You will need to find the client addresses for the non-virtual functions yourself, but the address for the vtable can easily be gathered from the Windows Client, simply navigate to your class and find the `vtable` and copy and paste the first address into the symbol map file.