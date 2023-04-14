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
        card = allCards.getCard();
        image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.computer.hit(card);
        this.vista.changeBackgroundCardComputer(image);
        this.vista.buttonsStartStyle();
        this.checkPoints();
    }

    getPlayerCard(allCards){
        let card = allCards.getCard();
        let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`;
        this.player.hit(card);

        let htmlcarta = `<div id="player-cards" style="background-image: url('${image}')"></div>`;
        this.vista.addDivCard(htmlcarta);

        let addP = `<p>${card.value} points</p>`;
        this.vista.addPointsInPlayerPoints(addP);

        this.checkPoints();
    }

    checkPoints(){
        let totalPoints = this.player.allPoints();
        if(totalPoints > 7.5){
            this.acabarTorn();
        }
    }

    acabarTorn(){
        this.vista.buttonsNoneStyle();   
    }
}