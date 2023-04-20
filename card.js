/**
 * La classe card la tenim per obtenir les dades de les cartes que son:
 * -suit: [oros, bastos, copas, espadas]
 * -value: quan costa la carta
 * -number: el numero que te la carta
 */
export default class Card {
  /**
   * @param {string} suit
   * @param {int} value
   * @param {int} number
   */
  constructor(suit, value, number) {
    this.suit = suit;
    this.value = value;
    this.number = number;
  }
}
