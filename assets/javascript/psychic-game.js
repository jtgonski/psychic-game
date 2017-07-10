var wins = 0;
var losses = 0;
var guessesLeft = 10;

var charSet = "abcdefghijklmnopqrstuvwxyz";


if (guessesLeft > 0) {

	var compLetter = charSet.charAt(Math.floor(Math.random() * charSet.length));
	console.log(compLetter);

	var wrongLetters = " ";

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


		wrongLetters += userGuess + ", "; 
		document.getElementById("wrongLetters").innerHTML = wrongLetters;

		guessesLeft = guessesLeft - 1; 
		document.getElementById("guessesLeft").innerHTML = guessesLeft; 

		if (userGuess === compLetter) {
			alert("you won!");
			wins = wins + 1; 
			document.getElementById("wins").innerHTML = wins;
		}
	}

}
else if (guessesLeft < 1) {
	losses = losses + 1; 
	alert("you lost this round! I was thinking of" + compLetter); 
	
}






/*
else if (gameOn = false; && guessesLeft = 0) {
	losses += 1; 
	document.getElementById("losses").innerHTML = losses; 
}

else if (gameOn = false && guessesLeft != 0) {
	wins += 1; 
	document.getElementById("wins") = wins; 
}

*/


