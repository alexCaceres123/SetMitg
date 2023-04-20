/**
 * Explicació de game
 */
export default class Game {
  /**
   * @param {Jugador} player
   * @param {Jugador} computer
   * @param {Vista} vista
   */
  constructor(player, computer, vista) {
    this.player = player;
    this.computer = computer;
    this.vista = vista;
  }

  /**
   * Explicació de game
   * @param {Deck} allCards
   */
  iniciar(allCards) {
    let card = allCards.getCard();
    let image = `img/${card.suit}/${card.suit}_${card.number}.jpg`;
    this.player.hit(card);
    this.vista.changeBackgroundCardPlayer(image);
    let addP = `<p>${card.value} points</p>`;
    this.vista.addPointsInPlayerDiv(addP);
    card = allCards.getCard();
    image = `img/${card.suit}/${card.suit}_${card.number}.jpg`;
    this.computer.hit(card);
    this.vista.changeBackgroundCardComputer(image);
    addP = `<p>${card.value} points</p>`;
    this.vista.addPointsInComputerDiv(addP);
    this.vista.buttonsStartStyle();
  }

  /**
   * Explicació de game
   * @param {Deck} allCards
   * @param {string} jugador
   * @return {String}
   */
  jugada(allCards, jugador) {
    const card = allCards.getCard();

    const image = `img/${card.suit}/${card.suit}_${card.number}.jpg`;
    let htmlcarta = `<div id="${jugador}-cards"`;
    htmlcarta += `style="background-image: url('${image}')"></div>`;
    const addP = `<p>${card.value} points</p>`;

    if (jugador === 'player') {
      this.vista.addDivPlayerCard(htmlcarta);
      this.vista.addPointsInPlayerDiv(addP);
      this.player.hit(card);
      this.playerCheckPoints();
    } else if (jugador === 'computer') {
      this.vista.addDivComputerCard(htmlcarta);
      this.vista.addPointsInComputerDiv(addP);
      this.computer.hit(card);
      const val = this.computerCheckPoints();
      return val;
    }
  }
  /**
   * Explicació de game
   * @param {Deck} allCards
   */
  computerPlays(allCards) {
    let val = this.computerCheckPoints();
    if (val === 'computer') {
      this.gameWinner(val);
    } else {
      while (true) {
        val = this.jugada(allCards, 'computer');
        if (val !== 'continue') {
          this.gameWinner(val);
          break;
        }
      }
    }
  }
  /**
   * Explicació de game
   */
  playerCheckPoints() {
    const totalPoints = this.player.allPoints();
    if (totalPoints > 7.5) {
      this.gameWinner('computer');
    }
  }
  /**
   * Explicació de game
   * @return {String}
   */
  computerCheckPoints() {
    const plypoints = this.player.allPoints();
    const comppoints = this.computer.allPoints();

    if (comppoints > plypoints && comppoints <= 7.5 ||comppoints===plypoints) {
      return 'computer';
    } else if (comppoints > 7.5) {
      return 'player';
    } else {
      return 'continue';
    }
  }
  /**
   * Explicació de game
   * @param {Deck} allCards
   */
  acabaTorn(allCards) {
    this.vista.buttonsNoneStyle();
    this.computerPlays(allCards);
  }
  /**
   * Explicació de game
   * @param {String} nameWinner
   */
  gameWinner(nameWinner) {
    this.vista.buttonsNoneStyle();
    this.vista.stateDivWinnerGame(nameWinner);
  }
  /**
   * Explicació de game
   * @param {Deck} allCards
   */
  resetGame(allCards) {
    this.vista.resetVista();
    this.player.resetStats();
    this.computer.resetStats();
    this.vista.buttonsStartStyle();
    this.jugada(allCards, 'player');
    this.jugada(allCards, 'computer');
  }
}
