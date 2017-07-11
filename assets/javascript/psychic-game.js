
//Starting variables 
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var charSet = "abcdefghijklmnopqrstuvwxyz";
var wrongLetters = " ";
var compLetter = charSet.charAt(Math.floor(Math.random() * charSet.length));
	//check computer's letter
	console.log(compLetter);
	
var userGuess; 

//reset function to keep game going after the first round 
var beginAgain = function() {
	guessesLeft = 10; 
	document.getElementById("guessesLeft").innerHTML = guessesLeft;

	wrongLetters = " "; 
	document.getElementById("wrongLetters").innerHTML = wrongLetters; 

	compLetter = charSet.charAt(Math.floor(Math.random() * charSet.length));
	console.log(compLetter); 

}

//determines if user has picked a letter key
var isLetterKey = function(userGuess) { 
	return userGuess >=  "a" && userGuess <= "z"; 

}

//let the games begin! Users picks a key: 
document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (isLetterKey(userGuess)) {

			guessesLeft = guessesLeft - 1; 
			document.getElementById("guessesLeft").innerHTML = guessesLeft; 
		
			if (guessesLeft > 0) {

				wrongLetters += userGuess + ", "; 
				document.getElementById("wrongLetters").innerHTML = wrongLetters;


				if (userGuess === compLetter) {
					alert("you won! I was thinking of '" + compLetter + "'");
					wins = wins + 1; 
					document.getElementById("wins").innerHTML = wins;
					beginAgain();
				}

			}

			else {
				losses = losses + 1; 
				document.getElementById("losses").innerHTML = losses;
				alert("you lost this round! I was thinking of '" + compLetter + "'"); 
				alert("try again! Pick another letter to begin"); 
				beginAgain(); 
			}
		}

		else {
			alert("Please pick a letter!");
		}
	}




