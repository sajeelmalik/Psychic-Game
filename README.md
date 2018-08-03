# Psychic-Game

Compete against Mewtwo and determine who is the greater psychic!

* Carefully attempt to guess the letter that Mewtwo has picked. You only have 7 guesses to beat him!
* Powered by Bootstrap and Javascript

## Getting Started

Follow the deployed project link below to play the game!

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Psychic Game](https://sajeelmalik.github.io/Psychic-Game/)


### Image Preview of Psychic Game
<!-- take a picture of the image and add it into the readme  -->
![Psychic Game Preview](https://raw.githubusercontent.com/sajeelmalik/Psychic-Game/master/assets/images/preview.JPG "Mewtwo's Challenge - The Psychic Showdown")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!


## Technology Used

* **HTML5**
* **CSS3** 
* **Javascript** - the primary scripting logic powering the game
* [**Bootstrap CDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web styling framework used
* [**Google Fonts**](https://fonts.google.com/) - an interactive library of licensed fonts 

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Javascript enables the developer to instatiate functions that rely on a user's input, namely when they press certain keys on the keyboard. Psychic Game's crucial logic runs on an event-specific function *only* when a user's inputted key hase been released (document.onkeyup).
```
document.onkeyup = function(event){
            guess = event.key.toLowerCase();
            if(alphabet.indexOf(guess) > -1)
            {
                guesses.push(guess);  
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
            else{
                alert("Type a letter to play the game!");
            }
        };

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* background-size: cover proved to be a novel and simple method to ensure that background images encompass the entire screen according to their original dimensions. Manipulating the % height and width can help adequately place the image as well.
* document.onkeyup is a crucial event listener for programs that require a user input. A useful point of further learning would be to investigate other event listening methods
* .join() was  extremely useful as a string and array method to separate elements in a more presentable and readable way



## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
