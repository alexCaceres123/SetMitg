/**
 * Classe encarregada de tenir la informació del jugador:
 * les seves cartes, el nom, els diners i els seus punts
 */
export default class Jugador {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.cards = [];
    this.name = name;
    this.points = 0;
  }

  /**
   * funció que afageix cartes a la array
   * del jugador
   * @param {Card} carta
   */
  hit(carta) {
    this.cards.push(carta);
    this.points += carta.value;
  }

  /**
   * funció que retorna tots els punts
   * del jugador
   * @return {points}
   */
  allPoints() {
    return this.points;
  }

  /**
   * funció encarregada de resetejar les
   * stats del jugador
   */
  resetStats() {
    this.cards = [];
    this.points = 0;
  }
}
