class Game{
    constructor(player, computer, vista){
        this.player = player;
        this.computer = computer;
        this.vista = vista;
    }

    iniciar(allCards){
        let card = allCards.getCard()
        let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.player.hit(card)
        this.vista.changeBackgroundCardPlayer(image);
        card = allCards.getCard()
        image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.computer.hit(card)
        this.vista.changeBackgroundCardComputer(image);
        this.vista.buttonsStartStyle();
    }

    getPlayerCard(allCards){
        let card = allCards.getCard();
        let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.player.hit(card)
        let htmlcarta = `<div id="player-cards" style="background-image: url('${image}')"></div>`;
        this.vista.addDivCard(htmlcarta);
        this.updatePoints(card.value);
    }

    updatePoints(pointsCard){
        let addP = `<p>${pointsCard} points</p>`
        this.vista.addPointsInPlayerPoints(addP)
    }

}