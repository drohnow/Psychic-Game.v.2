// Psychic Game version 1.0; September 6, 2017
// Author: David Rohnow
// Homework Assignment #3 



	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; 


	var rLetter = letters[Math.floor(Math.random() * 10)];
	

	//var rLetter = "d"
	var guessRemain = 10;
	var myWINS = 0;
	var myLOSES = 0;
	var gSoFarArray = [];
	var uLetter = "";


	//document.getElementById("demo").innerHTML = "Not correct; try again!";
	
	function myFunction(event) {
    	//uLetter = event.key;
    	uLetter = event.key;
    	console.log(uLetter);
    	console.log(rLetter);
    	var output = document.getElementById("output");
    	//for (i = 0; i < gSoFarArray.length; i++) {
    		//if (uLetter == gSoFarArray[i]) {
    		//document.getElementById("comments").innerHTML = "Not correct!";
    		
    		//break;
    	gameFunction()
    	}
    	//document.getElementById("userGuessP").innerHTML = uLetter;
    	
    	//for (i = 0; i < gSoFarArray.length; i++) {
			//if (uLetter == gSoFarArray[i]) {
				//document.getElementById("comments").innerHTML = "Choose a different letter";
				//break;
			//} else {
			//gameFunction()
				
		//}



	
	function gameFunction() {
				if (rLetter == uLetter) {
					document.getElementById("gForm").reset();
					output.value = "You Win!";
					recordWinsF();
					playAgainF();
			
				} else {
					output.value = "Nice Try, Guess Again.";
					//guessesSoFarF();
					//document.getElementById("gHere").value = "";
					gRemainingF();
					recordLosesF();
				}
	}


	function playAgainF() {
    	//document.getElementById("gHere").value = "";
    	document.getElementById("gForm").reset();
    	document.getElementById("gRemaining").value = "10";
    	guessRemain = 10
    	rLetter = letters[Math.floor(Math.random() * 10)];
    	//document.getElementById("guess").disabled = false;
    	//document.getElementById("gHere2").value = "";
    	//gSoFar.value = "";
    	//output.value = "Ready, Set, Go!";

	}


	function gRemainingF() {
		--guessRemain;
		document.getElementById("gRemaining").value = guessRemain;
	}


	function recordWinsF() {
				myWINS = ++ myWINS
				document.getElementById("gWins").value = myWINS
				document.getElementById("gForm").reset();

		}


	function recordLosesF() {
				if (guessRemain == 0) {
					myLOSES = ++ myLOSES;
					document.getElementById("gLoses").value = myLOSES;
					output.value = "You Lost!   The Letter was: " + rLetter;
					//document.getElementById("guess").disabled = true;
					playAgainF()
					document.getElementById("gHere2").value = "";

				} 
		}



	//function guessesSoFarF() {
	//	var gSoFarV = document.getElementById("gSoFar").value;
	//	var gHereV = document.getElementById("gHere").value;
	//	gSoFarArray.push(gHereV);
	//	gSoFar.value = gSoFarArray;
	//}





		








