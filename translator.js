window.onload = function() {
//	document.getElementById("input").innerHTML = "INPUT";
//	document.getElementById("output").innerHTML = "OUTPUT";
}
var input = "";
var translation = "";
// array for translation
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
// offset value
var offset = 0;
// incremental variable
var i = 0;

function enableButtons() {
	document.getElementById("decode").style.opacity = 1;
	document.getElementById("decode").disabled = false;
	document.getElementById("decode").style.cursor = "pointer";
/*
	document.getElementById("encode").style.opacity = 1;
	document.getElementById("encode").disabled = false;
	document.getElementById("encode").style.cursor = "pointer";
*/
}

//takes value of selectBox and sets to offset
function decode() {
	input = document.getElementById("input").value;
	offset = Math.abs(selectBox.options[selectBox.selectedIndex].value) * 1;
	console.log(offset);
	var i = 0;
	translation = "";
	translate_decode();
}

/*
function encode() {
	input = document.getElementById("input").value;
	offset = Math.abs(selectBox.options[selectBox.selectedIndex].value) * -1;
	console.log(offset);
	var i = 0;
	translation = "";
	translate_encode();
}
*/

function translate_decode() {
	// variable set to length of text
	var input_length = input.length;
	for (i = 0; i < input_length; i++) {
		var charachter = input.charAt(i);
		console.log("charachter = " + charachter);
		var loc = alphabet.indexOf(charachter);
		console.log("loc = " + loc);
		var loc_offset = loc + offset;
		console.log("loc_offset = " +  loc_offset);
		if (loc_offset > 26) {
			loc_offset = loc_offset - 27;
			console.log("NEW loc_offset = " +  loc_offset);
		}
		console.log("alphabet[loc_offset = " + alphabet[loc_offset]);
		translation = translation + alphabet[loc_offset];
		console.log("transloation = " +  translation);
	}
	i = 0;
/*
document.getElementById("output").innerHTML = translation;
*/
document.getElementById("formatted_output").innerHTML = translation;
}

/*
function translate_encode() {
	// variable set to length of text
	var input_length = input.length;
	for (i = 0; i < input_length; i++) {
		var charachter = input.charAt(i);
		console.log("charachter = " +  charachter);
		var loc = alphabet.indexOf(charachter);
		console.log("loc = " +  loc);
		var loc_offset = loc + offset;
		console.log("loc_offset = " +  loc_offset);
		if (loc_offset < 0) {
			loc_offset = loc_offset + 27;
			console.log("NEW loc_offset = " +  loc_offset);
		}
		console.log("alphabet[loc_offset = " +  alphabet[loc_offset]);
		translation = translation + alphabet[loc_offset];
		console.log("translation = " +  translation);
	}
	i = 0;
document.getElementById("output").innerHTML = translation;
document.getElementById("formatted_output").innerHTML = translation;
}
*/