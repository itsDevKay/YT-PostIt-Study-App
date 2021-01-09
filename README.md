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
