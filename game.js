class Game{
    constructor(player, computer){
        this.player = player;
        this.computer = computer;
    }

    iniciar(allCards){
        let card = allCards.getCard()
        let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.player.hit(card)
        document.getElementById("player-cards").style.backgroundImage = "url('" + image + "')";

        card = allCards.getCard()
        image = `img/${card.suit}/${card.suit}_${card.number}.jpg`
        this.computer.hit(card)
        document.getElementById("computer-cards").style.backgroundImage = "url('" + image + "')";
        
    }
}