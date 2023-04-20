import Card from './card.js';
/**
 * Explicació de game
 */
export default class Deck {
  /**
   * @param {string} cards
   */
  constructor(cards) {
    this.cards = cards;
  }
  /**
   * @param {int} indxCard
   */
  pop(indxCard) {
    this.cards.splice(indxCard, 1);
  }
  /**
   * @param {string} cards
   */
  push(cards) {
    this.cards.push(cards);
  }
  /**
   * xd
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
   * @return {[]}
   */
  getCard() {
    const CartRandomNumber=Math.floor(Math.random()*this.cards.length-1)+1;
    const carta = this.cards[CartRandomNumber];
    this.pop(CartRandomNumber);
    return carta;
  }
}

