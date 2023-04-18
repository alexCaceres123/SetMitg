class Vista{
    constructor(){
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
        this.buttonResetGame = document.getElementById("reset");
    }

    listen(func1, func2, func3, func4){
        this.buttonResetGame.addEventListener('click', () => {
            func1();
        });

        this.buttonAcabaTorn.addEventListener('click', function(){
            func2();
        })
        
        this.buttonAgafarCarta.addEventListener('click', function(){
            func3();
        })

        this.buttonStartGame.addEventListener('click', function(){
            func4();
        })
    };

    changeBackgroundCardPlayer(img){
        this.playerCard.style.backgroundImage = "url('" + img + "')";
    }
    
    changeBackgroundCardComputer(img){
        this.computerCard.style.backgroundImage = "url('" + img + "')";
    }

    buttonsStartStyle(){
        this.buttonStartGame.style.display = "None";
        this.buttonResetGame.style.display = "block";
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

    resetVista(){
        this.divPlayer.innerHTML = "";
        this.divComputer.innerHTML = "";
        this.divPointsPlayer.innerHTML = `<p class="title_points">Player Points</p>`;
        this.divPointsComputer.innerHTML = `<p class="title_points">Computer Points</p>`;
        this.divWinnerGame.style.display = "None";
    }
}