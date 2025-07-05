let humanScore = 0, cpuScore = 0, draw = 0;

function getComputerChoice() {
    let cpuChoice = 0;
    while (true) {
        cpuChoice = Math.floor(Math.random() * 10)
        if (cpuChoice == 1) {
            return "Rock";
        } else if (cpuChoice == 2) {
            return "Paper";
        } else if (cpuChoice == 3) {
            return "Scissors";
        }
    }
}

function getHumanChoice() {
    let humChoice = prompt("1 - Rock\n2 - Paper\n3 - Scissors\nChoose your play:");
    if (humChoice == 1) {
        return "Rock";
    } else if (humChoice == 2) {
        return "Paper";
    } else if (humChoice == 3) {
        return "Scissors";
    }
}

function playRound(humChoice, cpuChoice) {
    switch(humChoice) {
        case "Rock":
            if (cpuChoice == "Rock") {
                draw++;
                console.log("Draw! Rock x Rock.")
                break;
            } else if (cpuChoice == "Paper") {
                cpuScore++;
                console.log("You Lost! Paper beats Rock!")
                break;
            } else {
                humanScore++;
                console.log("You Won! Rock beats Scissors!")
                break;
            }
        case "Paper":
            if (cpuChoice == "Rock") {
                humanScore++;
                console.log("You Won! Paper beats Rock!")
                break;
            } else if (cpuChoice == "Paper") {
                draw++;
                console.log("Draw! Paper x Paper.")
                break;
            } else {
                cpuScore++;
                console.log("You Lost! Scissors beats Paper!")
                break;
            }
        case "Scissors":
            if (cpuChoice == "Rock") {
                cpuScore++;
                console.log("You Lost! Rock beats Scissors!")
                break;
            } else if (cpuChoice == "Paper") {
                humanScore++;
                console.log("You Won! Scissors beats Paper!")
                break;
            } else {
                draw++;
                console.log("Draw! Scissors x Scissors.")
                break;
            }
    }
    return;
}

function showResults() {
    console.log(`You won ${humanScore} round(s)!`)
    console.log(`You lost ${cpuScore} round(s)!`)
    console.log(`Draw ${draw} round(s)!`)
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const hum = getHumanChoice();
        const cpu = getComputerChoice();
        playRound(hum, cpu);
    }
    showResults();
}

playGame();