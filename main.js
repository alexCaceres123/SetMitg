function createDeck(){
    let pals = ["oros", "copas", "bastos", "espadas"];
    let myDeck = [];

    for(i of pals){
        for(let j = 0; j <= 12; j++){

            let card;

            if(j <= 7){
                card = new Card(i, j, j);
            }
            else if(j >= 10){
                card = new Card(i, 0.5, j);
            }

            myDeck.push(card);
        }
    }

    let final_deck = new Deck(myDeck);
    console.log(final_deck);
}

createDeck();