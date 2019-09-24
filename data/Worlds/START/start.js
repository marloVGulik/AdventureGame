function main(action) {
	console.log("Main function ran");
	switch (action) {
		case 0:
			loadGame("Worlds/world1.json");
			break;
		case 1:
			loadGame("Worlds/options/options.json");
			break;
		case 2:
			loadGame("Worlds/quit/quit.json");
			break;
	}
	document.getElementById("START/start.js").parentNode.removeChild(document.getElementById("START/start.js"));
}
