class jugador{
    constructor(name, money){
        this.cards = [];
        this.name = name;
        this.money = money;
        this.points = 0;
    }

    hit(carta){
        this.cards.push(carta)
        this.points += carta.value;
    }   

    allPoints(){
        return this.points;
    }

    resetStats(){
        this.cards = [];
        this.points = 0;
    }
}