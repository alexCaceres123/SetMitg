import Card from './card.js';

/**
 * Aquesta classe la utilitzarem per tenir la nostres baraja
 * i tenir totes les cartes emmagatzemades
 */
export default class Deck {
  /**
   * Constructor de deck amb les cartes
   */
  constructor() {
    this.cards =[];
  }

  /**
   * Al agafar una carta aquesta funció serà
   * cridada per eliminar aquella mateixa carta
   * de la Deck
   * @param {int} indxCard
   */
  pop(indxCard) {
    this.cards.splice(indxCard, 1);
  }

  /**
   * Funció que crea la baralla amb totes les
   * cartes
   */
  createDeck() {
    const pals = ['oros', 'copas', 'bastos', 'espadas'];
    const myDeck = [];

    for (const i of pals) {
      for (let j = 1; j <= 12; j++) {
        let card;

        if (j <= 7) {
          card = new Card(i, j, j);
          myDeck.push(card);
        } else if (j >= 10) {
          card = new Card(i, 0.5, j);
          myDeck.push(card);
        }
      }
    }
    this.cards = myDeck;
  }

  /**
   * Funció que serà cridada en la classe game
   * que retornara una carta de la Deck
   * @return {Card}
   */
  getCard() {
    const CartRandomNumber=Math.floor(Math.random()*this.cards.length-1)+1;
    const carta = this.cards[CartRandomNumber];
    this.pop(CartRandomNumber);
    return carta;
  }
}

