class Deck{
    constructor(cards){
        this.cards = cards;
    }

    pop(indxCard){
        this.cards.splice(indxCard, 1);
        console.log(this.cards);
    }

    push(cards){
        this.cards.push(cards);
    }

    shuffle(){
        let shuffle_arr = []

        while(this.cards.length != 0){
            let index_number = Math.floor(Math.random() * this.cards.length);
            shuffle_arr.push(this.cards[index_number]);
            this.cards.splice(index_number, 1);
        }

        this.cards = shuffle_arr;
    }

    createDeck(){
        let pals = ["oros", "copas", "bastos", "espadas"];
        let myDeck = [];

        for(let i of pals){
            for(let j = 1; j <= 12; j++){

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
        this.cards = myDeck;
    }

    getCard(){
        let CartRandomNumber = Math.floor(Math.random() * this.cards.length - 1) + 1;
        let carta = this.cards[CartRandomNumber];
        this.pop(CartRandomNumber);
        return carta;
    }

}

