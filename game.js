/**
 * Funció encarragade de gestionar tot el funcionament
 * del joc
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
   * Aquesta funció será cirdada al clicar el botó StartGame,
   * el que fa es agafar una carta per el Player i el Computer
   * i actualitza les stats dels jugadors i la vista
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
   * Aquesta funció es cridara quan un dels jugadors a través del
   * parametre jugador que es passara "player" o computer" vulgui
   * agafar carta i actualitzara les stats de jugador i vista. També serà
   * l'encarregada de cridar les funcions de checkPoints()
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
   * Funció que s'activarà quan el player acabi torn.
   * El que fa es que l'ordinador jugi, fent un bucle infinit fins que
   * guanyi o perdi. El bucle no es fará si al acabar torn del jugador
   * l'ordinador ja ha guanyat sense necessitat de agafar cap carta
   * @param {Deck} allCards
   */
  computerPlays(allCards) {
    let val = this.computerCheckPoints();
    if (val === 'computer') {
      this.gameWinner(val);
    } else {
      let playing = true;
      while (playing) {
        val = this.jugada(allCards, 'computer');
        if (val !== 'continue') {
          this.gameWinner(val);
          playing = false;
        }
      }
    }
  }

  /**
   * Mira els punts del Player i verifica que no s'ha pasat
   * de 7.5 punts
   */
  playerCheckPoints() {
    const totalPoints = this.player.allPoints();
    if (totalPoints > 7.5) {
      this.gameWinner('computer');
    }
  }

  /**
   * Mira els punts del jugador Computer i verifica qui ha guanyat
   * i ho rentorna. Si no ha guanyat ni perdut retorna que continui
   * per tal de que el bucle infinit de ComputerPlays segueixi.
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
   * Quan el Player cliqui el boto acabar torn es crida
   * aquesta funció que li diu a la vista cridi la funcio
   * buttonsNoneStyle i fa que començi a jugar l'ordinador
   * @param {Deck} allCards
   */
  acabaTorn(allCards) {
    this.vista.buttonsNoneStyle();
    this.computerPlays(allCards);
  }

  /**
   * Funció encarregadar de pasar a la vista el nom de qui ha
   * guanyat el joc i també cirdar la funció buttonNoneStyle
   * @param {String} nameWinner
   */
  gameWinner(nameWinner) {
    this.vista.buttonsNoneStyle();
    this.vista.stateDivWinnerGame(nameWinner);
  }

  /**
   * Funció encarregada de resetejar el joc fent que totes
   * les classes cridin les seves funcións de reseteig i comença
   * una nova jugada
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
