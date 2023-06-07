# Writing Headers

> This is where the difficulty will spike greatly, however once this work is done you do not have to do it again. If you write any headers, contributing them to [FrederoxDev/Bedrock-Headers](https://github.com/FrederoxDev/Bedrock-Headers) would be appreciated so that others in the future don't have to redo that work.

## Pre-requisites

1. You will need to get the `Windows Server (1.14.60.5)` and the `Linux Server (1.14.60.5)`, you can download an archived version from the [Minecraft Fandom page](https://minecraft.fandom.com/wiki/Bedrock_Dedicated_Server_1.14.60.5).

<br />

2. Next you will need to get the `Windows Client (1.14.60.5)`, however you will already have this installed though ZenovaLauncher if you have followed through the guide. To find it press `Win + R` and enter `%zenova_data%/versions/Minecraft-1.14.60.5/`

<br />

3. Lastly you will need the `Mac Education Client (1.14.70)`, this guide will not tell you how you can get this version. It is important that you get version `1.14.70`, as it contains a greater amount of debug information. Make sure to unzip the `.mdg` file to a folder before analysing, or else you will not be able to select the right file.

## Analysing in Ghidra

Analysing the files in Ghidra will take a long time, on an i3-1005G1 CPU, it took roughly 6 hours to analyse each version. Although you only will need to analyse 3 of the 4 versions, as you **do not need** to analyse the `Linux Server`. Follow the next steps for one version at a time.

1. Open Ghidra and select `File > New Project`, next select `Non-Shared Project` and enter an clearly labeled name for the version you are analysing. 

<br />

2. Next press <kbd>I</kbd> and locate the file for your version as below:
    - Windows Server - `bedrock_server.exe`
    - Windows Client - `Minecraft.Windows.exe`
    - Mac Edu Client - `minecraftpe` 

<br />

3. After you have imported the right file, double click it in the `Active Project` tab to open it in the `CodeBrowser`. It will then prompt you to `Auto-Analyse` the file, press `OK` and leave the default settings and confirm again. Close any open ghidra windows by pressing the black X in the top right corner, this will decrease the amount of work that Ghidra has to do.

<br />

4. Leave it to analyse, once done make sure to save the project with <kbd>Ctrl + S</kbd> so that you will not have to analyse it again