function startGame() {
    function handleAnswer(agree){
        
    }
    document.addEventListener("keydown", args => {
        const key = args.key.toLowerCase();

        if (key === "y") {
            handleAnswer(true);
        } else if (key === "n") {
            handleAnswer(false);
        }
    })
}

startGame()