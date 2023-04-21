/* eslint-disable */
import Deck from '../deck.js';
import Jugador from '../jugador.js';
import Game from '../game.js';
import Card from "../card.js";
class TestVista {
  constructor() {
      this.contStateDivWinnerGame = 0;
      this.contButtonsNoneStyle = 0;
      this.contResetVista = 0;
      this.contButtonsStartStyle = 0;
  }

  listen(func1, func2, func3, func4) {
  };

  changeBackgroundCardPlayer(img) {
  }

  changeBackgroundCardComputer(img) {
  }

  buttonsStartStyle() {
      this.contButtonsStartStyle++;
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
      this.contButtonsNoneStyle++;
  }

  stateDivWinnerGame(nameWinner) {
      this.contStateDivWinnerGame++;
  }

  resetVista() {
      this.contResetVista++;
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

    test('Funcio computerCheckPoints()', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);

        let CartaPlayer = new Card("oros", 3, 3);
        let CartaComputer = new Card("oros", 2, 2);
        player.hit(CartaPlayer);
        computer.hit(CartaComputer);
        let returnVal = game.computerCheckPoints();
        expect(returnVal).toBe("continue");

        player.cards = [];
        computer.cards = [];
        CartaPlayer = new Card("oros", 3, 6);
        CartaComputer = new Card("oros", 4, 5);
        player.hit(CartaPlayer);
        computer.hit(CartaComputer);
        returnVal = game.computerCheckPoints();
        expect(returnVal).toBe("computer");

        computer.cards = []
        CartaComputer = new Card("oros", 8, 5);
        computer.hit(CartaComputer)
        returnVal = game.computerCheckPoints();
        expect(returnVal).toBe("player");
    });

    test('Funcio acabarTorn()', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        allcards.createDeck();
        game.acabaTorn(allcards);                           //La funcio buttonsNoneStyle s'executa dos cops perque la cirdo
        expect(vista.contButtonsNoneStyle).toBe(2); // al acabarTorn() hi ha computerPlays(), això vol dir que funciona bé
    });

    test('Funcio gameWinner()', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        allcards.createDeck();
        game.gameWinner("player");
        expect(vista.contButtonsNoneStyle).toBe(1);
        expect(vista.contButtonsNoneStyle).toBe(1);
    });

    test('Funcio resetGame()', () => {
        const allcards = new Deck();
        const player = new Jugador('Player');
        const computer = new Jugador('Computer');
        const vista = new TestVista();
        const game = new Game(player, computer, vista);
        allcards.createDeck();
        game.resetGame(allcards);
        expect(vista.contButtonsStartStyle).toBe(1);
        expect(vista.contResetVista).toBe(1);
        expect(player.cards.length).toBe(1);
        expect(computer.cards.length).toBe(1);
        expect(allcards.cards.length).toBe(38);
    });
});
