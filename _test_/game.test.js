/* eslint-disable */
import Deck from '../deck.js';
import Jugador from '../jugador.js';
import Game from '../game.js';
import Card from "../card.js";
class TestVista {
  constructor() {
      this.contStateDivWinnerGame = 0;
  }

  listen(func1, func2, func3, func4) {
  };

  changeBackgroundCardPlayer(img) {
  }

  changeBackgroundCardComputer(img) {
  }

  buttonsStartStyle() {
  }

  addDivPlayerCard(template) {
  }

  addDivComputerCard(template) {
  }
  addPointsInPlayerDiv(points) {
  }

  addPointsInComputerDiv(points) {
  }

  buttonsNoneStyle() {
  }

  stateDivWinnerGame(nameWinner) {
      this.contStateDivWinnerGame++;
  }

  resetVista() {
  }
}
describe('Unit test Game', () => {
  test('Funcio iniciar()', () => {
    const allcards = new Deck();
    const player = new Jugador('Player');
    const computer = new Jugador('Computer');
    const vista = new TestVista();
    const game = new Game(player, computer, vista);
    allcards.createDeck();
    game.iniciar(allcards);
    expect(allcards.cards.length).toBe(38);
    expect(player.cards.length).toBe(1);
    expect(computer.cards.length).toBe(1);
  });

    test('Funcio jugada()', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        allcards.createDeck();
        game.jugada(allcards, "player");
        expect(allcards.cards.length).toBe(39);
        expect(player.cards.length).toBe(1);
        game.jugada(allcards, "computer");
        expect(allcards.cards.length).toBe(38);
        expect(computer.cards.length).toBe(1);
    });

    test('Funcio computerPlays (computer guanya directe)', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        const CartaPlayer = new Card("oros", 5, 5);
        const CartaComputer = new Card("oros", 6, 6);
        allcards.createDeck();
        player.hit(CartaPlayer);
        computer.hit(CartaComputer);
        game.computerPlays(allcards)
        expect(vista.contStateDivWinnerGame).toBe(1);
    });

    test('Funcio computerPlays (computer entra al if del while)', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        const CartaPlayer = new Card("oros", 3, 5);  // Per diferenciar el test anterior amb aquest cambio
        const CartaComputer = new Card("oros", 1, 6);// el value de computer sigui mes petit que el de player
        allcards.createDeck();                                              // aixi entrará al while i verifico si la vista s'ha executat
        player.hit(CartaPlayer);
        computer.hit(CartaComputer);
        game.computerPlays(allcards)
        expect(vista.contStateDivWinnerGame).toBe(1);
    });

    test('Funcio playerCheckPoints()', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        const CartaPlayer1 = new Card("oros", 6, 6);
        const CartaPlayer2 = new Card("oros", 5, 5);
        player.hit(CartaPlayer1);
        player.hit(CartaPlayer2);
        game.playerCheckPoints();
        expect(vista.contStateDivWinnerGame).toBe(1);
    });
});
