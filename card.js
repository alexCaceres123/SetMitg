/**
 * Explicació de game
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
