class Vista{
    constructor(){
        this.buttonStartGame = document.querySelector("#start-game p");
        this.buttonAgafarCarta = document.getElementById("agafarCarta");
        this.buttonAcabaTorn = document.getElementById("acabaTorn");
        this.playerCard = document.getElementById("player-cards");
        this.computerCard = document.getElementById("computer-cards");
        this.divPlayer = document.getElementById("player");
        this.divPointsPlayer = document.getElementById("playerPoints");
    }

    changeBackgroundCardPlayer(img){
        this.playerCard.style.backgroundImage = "url('" + img + "')";
    }
    
    changeBackgroundCardComputer(img){
        this.computerCard.style.backgroundImage = "url('" + img + "')";
    }

    buttonsStartStyle(){
        this.buttonStartGame.innerHTML = "Joc nou";
        this.buttonAgafarCarta.style.display = "block";
        this.buttonAcabaTorn.style.display = "block";

    }

    addDivCard(template){
        this.divPlayer.innerHTML += template;
    }

    addPointsInPlayerPoints(points){
        this.divPointsPlayer.innerHTML += points
    }

    buttonsNoneStyle(){
        this.buttonAgafarCarta.style.display = "none";
        this.buttonAcabaTorn.style.display = "none";
    }

}