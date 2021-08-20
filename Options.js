class Options {
    constructor () {
        this.rps = ["rock", "paper","scissors"];
    }

   get choice(){
        return computerChoice = options[Math.floor(Math.random()*this.rps.length)];
    };
 
}

Options.choice();

module.exports = Options;