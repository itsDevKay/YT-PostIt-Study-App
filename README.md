# YT-PostIt-Study-App
Minimal Youtube Post It Study app to watch videos without the extra features of YouTube to distract you.

---

## Screenshots
![YT PostIt](https://github.com/itsDevKay/YT-PostIt-Study-App/blob/main/YT-PostIt.png)

![YT PostIt Search](https://github.com/itsDevKay/YT-PostIt-Study-App/blob/main/YT-PostIt-search.png)

![YT PostIt Full Screen](https://github.com/itsDevKay/YT-PostIt-Study-App/blob/main/YT-PostIt-fullscreen.png)


## Why I Built This App
I enjoy listening to music on YouTube whenever I'm programming, designing, or doing anything else that requires my focus. I didn't like that I had to continuously switch back and forth from whatever I was working on, to YouTube and back again. I wanted a small window that could would be small enough to place and move around anywhere on my screen while always remaining on the top so I could easily select a new video. Thus, YT PostIt was born.

This app was built using the [ElectronJS](https://www.electronjs.org/) platform using simple HTML, CSS, and JavaScript. This was my first app using Electron, and the process could not have been more simple! Honestly recommend anyone trying to build a desktop app to check out their [docs](https://www.electronjs.org/docs). To speed up the code writing process, I used [BootStrap Studio](https://bootstrapstudio.io/) and built off of their clean blog template. 

## Limitations
Currently, this version of YT PostIt only returns a search of 20 results. This can be changed inside the code if you want a higher number. I do plan on in the future to integrate an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to lazy load more results.

Future updates also will include allowing you to log in to your own YouTube account to see the videos that you are subscribed to. 

Also, I am still looking for a way to autoplay the next song in queue for continuous listening/watching.

## Build From Source
You're going to need to make sure you have installed [NodeJS](https://nodejs.org/en/download/). This comes prepackaged with NPM which you can check your version using these commands:  

`node -v`  
and  
`npm -v`  

First clone the repository.  
`git clone https://github.com/itsDevKay/YT-PostIt-Study-App.git`  

cd into the directory with: `cd YT-PostIt-Study-App`  

Install the node modules using [npm](https://www.npmjs.com/).  
`npm install`  

Once that is complete, you can run the application using `npm start`.

However, if you want to build it into a desktop application you'll need to first install [Electron Builder](https://www.electron.build/).  
`yarn add electron-builder --dev`  

You can also use: `npm install electron-builder --dev` although, the documentation recommends you use [Yarn](https://yarnpkg.com/).

Once that is complete, you can build for your OS using one of the commands below:  

`electron-builder build --mac`  

`electron-builder build --win --ia32`

`electron-builder build --linux`

## Download Compiled Packages
For those that would rather install the application instead of building from source, I have included the .dmg and .exe files in a dropbox link. The files are above 25Mb or else I would have placed them in this GitHub repository.

Here are the links:  

**Windows (ia32)** - https://www.dropbox.com/s/f48by7mujgd77gm/YouTubePostIt%20Setup%201.0.0.exe?dl=0  

**Macintosh** - https://www.dropbox.com/s/th716p6h3oom6vs/YouTubePostIt-1.0.0.dmg?dl=0  

**Linux** - Well, I figure if you have a linux operating system, you're probably going to build from source. ¯\_(ツ)_/¯
