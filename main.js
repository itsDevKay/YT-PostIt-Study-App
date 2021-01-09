const { app, BrowserWindow } = require('electron')

function createWindow() {
	const win = new BrowserWindow({
		width: 370,
		height: 250,
		maxWidth: 370,
		maxHeight: 250,
		minWidth: 370,
		minHeight: 250,
		//frame: false,
		//titleBarStyle: 'hidden',
		transparent: true, frame: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		}
	})

	win.setAlwaysOnTop(true, 'floating', 1)
	win.maximizable = false
	win.loadFile('index.html')
	win.darkTheme = true
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})
