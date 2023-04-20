/**
 * Explicació de game
 */
export default class Jugador {
  /**
   * @param {string} name
   * @param {int} money
   */
  constructor(name, money) {
    this.cards = [];
    this.name = name;
    this.money = money;
    this.points = 0;
  }
  /**
   * @param {Card} carta
   */
  hit(carta) {
    this.cards.push(carta);
    this.points += carta.value;
  }
  /**
   * @return {points}
   */
  allPoints() {
    return this.points;
  }
  /**
   * xd
   */
  resetStats() {
    this.cards = [];
    this.points = 0;
  }
}
