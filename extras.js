const { remote, app } = require('electron');

function closeWindow() {
	let w = remote.getCurrentWindow();
	w.close();
	app.quit();
};
