class Game{
    constructor(player, computer, vista){
        this.player = player;
        this.computer = computer;
        this.vista = vista;
    }

    iniciar(allCards){
        let card = allCards.getCard();
        let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.player.hit(card);
        this.vista.changeBackgroundCardPlayer(image);
        let addP = `<p>${card.value} points</p>`;
        this.vista.addPointsInPlayerDiv(addP)

        card = allCards.getCard();
        image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.computer.hit(card);
        this.vista.changeBackgroundCardComputer(image);
        addP = `<p>${card.value} points</p>`;
        this.vista.addPointsInComputerDiv(addP)

        this.vista.buttonsStartStyle();
    }

    jugada(allCards, jugador){
        let card = allCards.getCard();

        let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`;
        let htmlcarta = `<div id="${jugador}-cards" style="background-image: url('${image}')"></div>`;
        let addP = `<p>${card.value} points</p>`;

        if(jugador == "player"){
            this.vista.addDivPlayerCard(htmlcarta);
            this.vista.addPointsInPlayerDiv(addP);
            this.player.hit(card);
            this.playerCheckPoints();

        }else if(jugador == "computer"){
            this.vista.addDivComputerCard(htmlcarta);
            this.vista.addPointsInComputerDiv(addP);
            this.computer.hit(card);
            let val = this.computerCheckPoints();
            return val
        } 
    }

    computerPlays(allCards){
        while(true){
            let val = this.jugada(allCards, "computer");
            if(val != "continue"){
                this.gameWinner(val);
                break;
            }
        }
    }

    playerCheckPoints(){
        let totalPoints = this.player.allPoints();
        if(totalPoints > 7.5){
            this.gameWinner("computer");
        }
    }

    computerCheckPoints(){
        let totalPlayerPoints = this.player.allPoints();
        let totalComputerPoints = this.computer.allPoints();

        if(totalComputerPoints > totalPlayerPoints && totalComputerPoints <= 7.5){
            return "computer";
        }else if(totalComputerPoints > 7.5){
            return "player";
        }else{
            return "continue";
        }
    }

    acabaTorn(allCards){
        this.vista.buttonsNoneStyle(); 
        this.computerPlays(allCards);
    }

    gameWinner(nameWinner){
        this.vista.stateDivWinnerGame(nameWinner);
    }
}