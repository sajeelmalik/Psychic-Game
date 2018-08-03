
// initialize primary variables
var alphabet = "abcdefghijklmnopqrstuwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guesses = [];

//start the game upon pressing any letter key
document.onkeyup = function(event){
    input = event.key.toLowerCase();
    if(alphabet.includes(input)){

        //have the computer randomly guess any letter in the alphabet
        var computerGuess = function(str){
            return str[(Math.floor(Math.random() * str.length))];
        };
        var computerLetter = computerGuess(alphabet);

        // Set the inner HTML contents of the #score div to our updated wins, losses, and guesses. Guesses are separated with a comma and a space through .join()
        var scoreUpdate = function(){
            var score = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p> Guesses Left: " + guessesLeft + "<p> Your guesses: " + guesses.join(", ") + "</p>";
            document.querySelector("#score").innerHTML = score;
        };

        //restarts the game upon a winning or losing condition
        var restart = function(){
            guessesLeft = 7;
            guesses = [];
            computerLetter = computerGuess(alphabet);
        }
        
        document.onkeyup = function(event){
            guess = event.key.toLowerCase();
            if(alphabet.indexOf(guess) > -1)
            {
                guesses.push(guess);  
                // guesses.join(" ");
                guessesLeft--;

                //minor test case to view the console's interpretation of computerGuess
                console.log(computerLetter);

                if(guess === computerLetter){
                    alert("Maybe you ARE a psychic after all!");
                    console.log("You WIN!!!");
                    wins++;
                    scoreUpdate();
                    restart();

                }
                else if(guessesLeft === 0){
                    console.log("You're a fraud!");
                    losses++;
                    scoreUpdate();
                    alert("YOU FRAUD! Mewtwo's guess was " + computerLetter + "!");
                    restart();
                    
                }
                else{
                    scoreUpdate();
                }
            }

            // alert user to stay within the bounds of the game
            else{
                alert("Type a letter to play the game!");
            }
        };
        
    }
    else{
        alert("Type a letter!");
    }
};



