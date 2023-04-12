class Deck{
    constructor(cards){
        this.cards = cards;
    }

    pop(){
        this.cards.pop()
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
}

