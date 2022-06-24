// Steps

// Collego gli elementi per il display

const cpuDisplay = document.getElementById('cpu-result');
const playerDisplay = document.getElementById('player-result');
const finalDisplay = document.getElementById('result');
const button = document.getElementById('button');

// Creo gli elementi per il confronto


button.addEventListener('click',function(){
    
    let cpuRoll
    let playerRoll

    cpuRoll = Math.floor(Math.random()*6)+1;
    playerRoll = Math.floor(Math.random()*6)+1;

    cpuDisplay.innerHTML = `Il computer ha estratto <strong>${cpuRoll}</strong>!`;
    playerDisplay.innerHTML = `Tu hai estratto <strong>${playerRoll}</strong>!`;

    let difference = "";

    if(cpuRoll > playerRoll){
        difference = cpuRoll - playerRoll;
        finalDisplay.innerHTML = `Ha vinto il computer di <strong>${difference}</strong>! Che peccato...`
    } else if(cpuRoll === playerRoll){
        finalDisplay.innerHTML = `È un pareggio!`
    } else{
        difference = playerRoll - cpuRoll;
        finalDisplay.innerHTML = `Hai vinto tu di <strong>${difference}</strong>! Evviva!`
    }
})