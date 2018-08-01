
// initialize primary variables
var alphabet = "abcdefghijklmnopqrstuwxyz";
var wins = 0;
var losses = 0;
var maxGuesses = 7;
var guesses = [];

//start the game upon pressing any letter key
document.onkeyup = function(event){
    input = event.key.toLowerCase();
    if(alphabet.includes(input)){

        //have the computer randomly guess any letter in the alphabet
        var computerGuess = function(){
            return alphabet[(Math.floor(Math.random() * alphabet.length))];
        };

        // Set the inner HTML contents of the #score div to our updated wins, losses, and guesses
        var scoreUpdate = function(){
            var score = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p> Your guesses: " + guesses + "</p>";
            document.querySelector("#score").innerHTML = score;
        };

        
        
        document.onkeyup = function(event){
            guess = event.key.toLowerCase();
            guesses.push(guess);  

            //minor test case to view the console's interpretation of computerGuess
            console.log(computerGuess());

            if(guess === computerGuess()){
                wins++;
                scoreUpdate();
                computerGuess();
            }
            else{
                losses++;
                scoreUpdate();
                computerGuess();
            }
        };
        
    }
    else{
        alert("Type a letter!");
    }
};



