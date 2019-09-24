var LoadedJSON;
var output;

function loadObject(objectToLoad, callback) {
	console.log("Loading: /data/JSON/" + objectToLoad);
	var object = new XMLHttpRequest();
	object.overrideMimeType('application/json');
	object.open('GET', 'data/JSON/' + objectToLoad, true);
	object.onreadystatechange = function() {
		if (object.readyState == 4 && object.status == "200") {
			callback(object.responseText);
		}
	};
	object.send(null);
}

// function makeVar(objectToLoad) {
// 	LoadedJSON = loadObject(objectToLoad, function(text) {
// 		console.log(text);
// 		LoadedJSON = text;
// 	});
// 	console.log(LoadedJSON);
// 	return LoadedJSON;
// }

function loadGame(worldToLoad) {
	loadObject(worldToLoad, function(text) {
		LoadedJSON = JSON.parse(text); 
		output = LoadedJSON; 
		console.log(output); 
		console.log("Loaded world is " + output['worldJSON']);

		// Set page elements
		body.style.backgroundImage = "url(output['background'])";
		document.getElementById("title").innerHTML = output['title']; 
		document.getElementById("description").innerHTML = output['story'];
		document.getElementById("button1").innerHTML = output['button1'];
		document.getElementById("button2").innerHTML = output['button2'];
		document.getElementById("button3").innerHTML = output['button3'];
		return output;
	});
}