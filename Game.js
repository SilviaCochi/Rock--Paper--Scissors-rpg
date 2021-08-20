const PromptSync = require("prompt-sync");

class RockPaperScissors {
    constructor () {
        this.prompt= PromptSync.createPromptModule();
        this.userScore=0;
        this.computerScore=0;
        this.name=prompt.createPromptModule();
    }

    let name = prompt("Hello! What is your name? ");

    startGame() {

        let userChoice =  prompt("Do you choose rock, paper or scissors? ").toString().toLowerCase();
        // let options = ["rock", "paper", "scissors"];
        // computerChoice = options[Math.floor(Math.random()*options.length)];
        console.log("Computer chose: " + computerChoice);

        let compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                console.log("The result is a tie!");
            }
            else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    userScore += 1;
                    console.log(name + " wins!");
                }
            else {
                    computerScore += 1;
                    console.log("Computer wins");
                    
                }
            }
            else if (choice1 === "paper") {
                if (choice2 === "rock") {
                    console.log(name + " wins!");
                    userScore += 1;
                }
                else {
                    console.log("Computer wins");
                    computerScore += 1;
                }
            }
            else if (choice1 === "scissors") {
                if (choice2 === "paper") {
                    console.log(name + " wins!");
                    userScore += 1;
                }
                else {
                    console.log("Computer wins");
                    computerScore += 1;
                }
            } else console.log("You must choose rock, paper or scissors.");

        } 

        get userChoice() {
            return this.prompt("Do you choose rock, paper or scissors? ").toString().toLowerCase();
        }

        compare(userChoice,computerChoice);


        playAgain () ;{
            
            let newRound = prompt("Would you like another round? y/n ");

            if (newRound === "y") {
                startGame();
            } else {
                console.log ("Thank you for playing " + name + "!");
                console.log(name + "'s score is : " + userScore + ", Computer score is : " + computerScore);
            }
        }
    }

    startGame();
}

module.exports = {RockPaperScissors};