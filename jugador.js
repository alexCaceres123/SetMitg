class jugador{
    constructor(name, money){
        this.cards = [];
        this.name = name;
        this.money = money;
        this.points = 0;
    }

    hit(carta){
        this.cards.push(carta)
    }
}