# 2 - First Project

> Summary: Chapter 2 will lead you through the basics of `"Hooking"` functions in ZenovaAPI, as well as by the end you will have your own custom Item. Please keep in mind that this section of the guide will be significantly easier then later parts, this is due to the majority of the work for the headers has already been done for you, be prepared for a difficultly increase later on.

## Quick Project Setup
Open up a powershell instance in the folder in which you want your project folder to be in. Hover over the top right side of the commands below and click `Copy to Clipboard` and paste it into Powershell (not CMD). This will setup your entire project ready to complete the following chapters.
```powershell
git clone https://github.com/FrederoxDev/Modding-Guide-Template
cd Modding-Guide-Template
Remove-Item -Recurse -Force .git
git init
git submodule add https://github.com/FrederoxDev/Bedrock-Headers

$Path = "./resources/assets/manifest.json"
(Get-Content $Path).replace("uuid1", (New-Guid)) | Set-Content $Path
(Get-Content $Path).replace("uuid2", (New-Guid)) | Set-Content $Path

cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo . -Bbuild
start build/Example.sln
```

## Building the Project
### TODO:
- Enable settings in ZenovaLauncher
- What to expect, debug points, err