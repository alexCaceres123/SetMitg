class Vista{
    constructor(){
        this.textStartGame = document.querySelector("#start-game p");
        this.buttonStartGame = document.querySelector("#start-game");
        this.buttonAgafarCarta = document.getElementById("agafarCarta");
        this.buttonAcabaTorn = document.getElementById("acabaTorn");
        this.playerCard = document.getElementById("player-cards");
        this.computerCard = document.getElementById("computer-cards");
        this.divPlayer = document.getElementById("player");
        this.divComputer = document.getElementById("computer");
        this.divPointsPlayer = document.getElementById("playerPoints");
        this.divPointsComputer = document.getElementById("computerPoints");
        this.divWinnerGame = document.getElementById("winner");
    }

    changeBackgroundCardPlayer(img){
        this.playerCard.style.backgroundImage = "url('" + img + "')";
    }
    
    changeBackgroundCardComputer(img){
        this.computerCard.style.backgroundImage = "url('" + img + "')";
    }

    buttonsStartStyle(){
        this.textStartGame.innerHTML = "Joc nou";
        this.buttonAgafarCarta.style.display = "block";
        this.buttonAcabaTorn.style.display = "block";
    }

    addDivPlayerCard(template){
        this.divPlayer.innerHTML += template;
    }

    addDivComputerCard(template){
        this.divComputer.innerHTML += template;
    }

    addPointsInPlayerDiv(points){
        this.divPointsPlayer.innerHTML += points
    }

    addPointsInComputerDiv(points){
        this.divPointsComputer.innerHTML += points
    }

    buttonsNoneStyle(){
        this.buttonAgafarCarta.style.display = "none";
        this.buttonAcabaTorn.style.display = "none";
    }

    stateDivWinnerGame(nameWinner){
        if(nameWinner == "player"){
            this.divWinnerGame.style.top = "30%";
            this.divWinnerGame.style.display = "block";
        }else if(nameWinner == "computer"){
            this.divWinnerGame.style.top = "70%";
            this.divWinnerGame.style.display = "block";
        }
    }
}