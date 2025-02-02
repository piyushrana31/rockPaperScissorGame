let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random()*3);
    return arr[idx];
}; 

const gameDraw = () => {
    msg.innerText = "Match is draw. Play again!";
    msg.style.backgroundColor = "#372554";
}; 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose, ${userChoice} was beaten by ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};  

const playGame = (userChoice) => {
    let compChoice = genComputerChoice();

    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;

        if(userChoice === "rock") {
            userWin = (compChoice==="paper") ? false : true;
        }else if(userChoice === "paper"){
            userWin = (compChoice==="scissors") ? false : true;
        }else{
            userWin = (compChoice==="rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});