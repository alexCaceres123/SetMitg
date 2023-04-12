let startGame = document.getElementById("start-game");

function createDeck(){
    let pals = ["oros", "copas", "bastos", "espadas"];
    let myDeck = [];

    for(i of pals){
        for(let j = 0; j <= 12; j++){

            let card;

            if(j <= 7){
                card = new Card(i, j, j);
                myDeck.push(card);
            }
            else if(j >= 10){
                card = new Card(i, 0.5, j);
                myDeck.push(card);
            }
        }
    }

    let final_deck = new Deck(myDeck);
    return final_deck
}

let allCards = createDeck();

function firstPlayerCard(baraja){    
    let CartRandomNumber = Math.floor(Math.random() * baraja.length) + 1;
    let pal = baraja[CartRandomNumber].suit;
    let number = baraja[CartRandomNumber].number;
    let image = `img/${pal}/${pal}_${number}.jpg`
    document.getElementById("player-cards").style.backgroundImage = "url('" + image + "')";
}

startGame.addEventListener('click', function(){
    firstPlayerCard(allCards.cards)
})
