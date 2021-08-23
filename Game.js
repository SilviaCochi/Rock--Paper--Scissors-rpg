const prompt = require("prompt-sync")();

class RockPaperScissors {
    constructor (Name) {
        this.userScore= 0;
        this.computerScore= 0;
        this.Name = null;
    }

    userName (take) {
        this.Name = take;
    }

    saveComputerScore () {return (this.computerScore)
    }

    startGame() {

        let userChoice =  prompt("Do you choose rock, paper or scissors? ").toString().toLowerCase();
        let options = ["rock", "paper", "scissors"];
        let computerChoice = options[Math.floor(Math.random()*options.length)];
        console.log(`Computer chose: ${computerChoice}`);
        this.compare(userChoice, computerChoice);
        this.playAgain();
    }

    compare (choice1,choice2) {
            if (choice1 === choice2) {
                console.log("The result is a tie!");
            }
            else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    this.userScore ++;
                    console.log(`${this.Name} wins!`);
                }
                else {
                    this.computerScore += 1;
                    console.log("Computer wins");
                    
                }
            }
            else if (choice1 === "paper") {
                if (choice2 === "rock") {
                    console.log(`${this.Name} wins!`);
                    this.userScore += 1;
                }
                else {
                    console.log("Computer wins");
                    this.computerScore += 1;
                }
            }
            else if (choice1 === "scissors") {
                if (choice2 === "paper") {
                    console.log(`${this.Name} wins!`);
                    this.userScore += 1;
                }
                else {
                    console.log("Computer wins");
                    this.computerScore += 1;
                }
            } else console.log("You must choose rock, paper or scissors.");
    }

    playAgain () {
            
        let newRound = prompt("Would you like another round? y/n ");

        if (newRound === "y") {
            this.startGame();
        } else {
            console.log (`Thank you for playing ${this.Name} !`);
            console.log(`${this.Name}'s score is : ${this.userScore}, Computer score is : ${this.computerScore}`);
        }
    }
}

module.exports = RockPaperScissors;