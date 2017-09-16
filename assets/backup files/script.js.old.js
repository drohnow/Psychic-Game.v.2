// Psychic Game version 1.0; September 6, 2017
// Author: David Rohnow
// Homework Assignment #3 



	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; 


	var rLetter = letters[Math.floor(Math.random() * 10)];
	alert(rLetter);

	//var rLetter = "d"
	var guessRemain = 10;
	var myWINS = 0;
	var myLOSES = 0;
	var gSoFarArray = ["a", "b", "c"];



	//document.getElementById("demo").innerHTML = "Not correct; try again!";
	
	function myFunction(event) {
    	var uLetter = event.key;
    	document.getElementById("comments").innerHTML = "What Letter Am I Thinkig Of?";
    	//for (i = 0; i < gSoFarArray.length; i++) {
		//	if (uLetter == i) {
		for (i = 0; i < gSoFarArray.length; i++) {
			if (uLetter == i) {
				document.getElementById("comments").innerHTML = "Choose a different letter";
			}
		}
				
		//}


    	//document.getElementById("userGuessP").innerHTML = uLetter;
    	console.log(uLetter);

		var output = document.getElementById("output");
			

		if (rLetter == uLetter) {
			document.getElementById("gForm").reset();
			output.value = "You Win, PLAY AGAIN!";
			recordWinsF();
			playAgainF();

				//break;
			} else {

				output.value = "Nice Try, Guess Again.";
				//guessesSoFarF();
				//document.getElementById("gHere").value = "";
				//gRemainingF();
				
				recordLosesF();

			}
	}


	function playAgainF() {
    	document.getElementById("gForm").reset();
    	document.getElementById("gRemaining").value = "10";
    	guessRemain = 10
    	rLetter = letters[Math.floor(Math.random() * 10)];
 

	}


	function gRemainingF() {
		
		--guessRemain;
		document.getElementById("gRemaining").value = guessRemain;
		
	}


	function recordWinsF() {
				myWINS = ++ myWINS
				document.getElementById("gWins").value = myWINS
				playAgainF()
				//document.getElementById("gForm").reset();

		}


	function recordLosesF() {
				if (guessRemain == 0) {
					myLOSES = ++ myLOSES;
					document.getElementById("gLoses").value = myLOSES;
					output.value = "You Lost!   The Letter was: " + rLetter;
					//document.getElementById("guess").disabled = true;
					playAgainF()
					document.getElementById("gHere2").value = "";
					document.getElementById("comments").innerHTML = "PLAY AGAIN!";

				} 
		}

}
	//function guessesSoFarF() {
	//	var gSoFarV = document.getElementById("gSoFar").value;
	//	var gHereV = document.getElementById("gHere").value;
	//	gSoFarArray.push(gHereV);
	//	gSoFar.value = gSoFarArray;
	//}


//	function gsfFunction() {
	//	for (i = 0; i < gSoFarArray.length; i++) {
	//		if (uLetter == i) {
	//			document.getElementById("comments").innerHTML = "Choose a different letter";
	//		} else {
	//			gRemainingF() 
	//		}
	//	}
//
//	}


		








