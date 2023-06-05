# 2 - First Project

> Chapter 2 will lead you through the basics of "Hooking" functions in ZenovaAPI, as well as by the end you will have your own custom Item. 

## Setting up the project
Open up a powershell instance in the folder in which you want your project folder to be in. Hover over the top right side of the commands below and click `Copy to Clipboard` and paste it into Powershell (not CMD). This will setup your entire project ready to complete the following chapters.
```ps
git clone https://github.com/MinecraftZenova/Template.git
cd Template
Remove-Item -Recurse -Force .git
git init
(Get-Content CmakeLists.txt).replace("inc)", "Bedrock-Headers/inc)") | Set-Content CMakeLists.txt
(Get-Content CmakeLists.txt).replace("/maps", "/Bedrock-Headers/maps)") | Set-Content CMakeLists.txt
git submodule add https://github.com/FrederoxDev/Bedrock-Headers
Remove-Item -Recurse -Force maps
cmake . -Bbuild
start build/Example.sln
```