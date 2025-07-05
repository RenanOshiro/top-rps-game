let humanScore = 0, cpuScore = 0;

function getComputerChoice() {
    let cpuOption = 0;
    while (true) {
        cpuOption = Math.floor(Math.random() * 10)
        if (cpuOption == 1) {
            return "Rock";
        } else if (cpuOption == 2) {
            return "Paper";
        } else if (cpuOption == 3) {
            return "Scissors";
        }
    }
}

function getHumanChoice() {
    let humOption = prompt("Choose your play: ");
    if (humOption == 1) {
        return "Rock";
    } else if (humOption == 2) {
        return "Paper";
    } else if (humOption == 3) {
        return "Scissors";
    }
}

console.log(getHumanChoice());