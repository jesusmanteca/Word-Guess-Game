var arrayChoices = ["r", "p", "s"];
        var wins = 0;
        var losses = 0
        var ties = 0


// This function is run whenever the user presses a key. Esta funcion 
document.onkeyup = function(event) 
{

// New variables to get the stuff form the id's
    var defaultText = document.getElementById("default-text");
    var userChoice = document.getElementById("user-choice-text");
    var computerChoice = document.getElementById("computer-choice-text");
        var winsText = document.getElementById("wins-text")
        var lossesText = document.getElementById("losses-text")
        var tiesText = document.getElementById("ties-text")
        
                            // ** Here we go! ** \\


// Determines which key was pressed by the user. 
var userGuess = event.key; 

// Randomly chooses an element from the array. This is the computer guess.
var computerGuess = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];

                        // ** Conditions are here ** \\
        
            if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

                    if ((userGuess === "r" && computerGuess === "s") || 
                        (userGuess === "p" && computerGuess === "r") || 
                        (userGuess === "s" && computerGuess === "p")) {
                            wins++;
                        }
                    else if (userGuess === computerGuess) {
                        ties++;
                        }
                    else {
                        losses++;
                    }                         
                    // ** Type out...** \\

                defaultText.textContent = "";
                userChoice.textContent = "You Chose..." + userGuess;
                computerChoice.textContent = "Computer chose..." + computerGuess;
                winsText.textContent = "Your wins: " + wins;
                lossesText.textContent = "Your losses: " + losses;
                tiesText.textContent = "Your ties: " + ties;
            }
        }