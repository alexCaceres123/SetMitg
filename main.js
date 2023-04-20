import Jugador from './jugador.js';
import Deck from './deck.js';
import Vista from './vista.js';
import Game from './game.js';

let allDeck = new Deck();
allDeck.createDeck();
const player = new Jugador('Player', 100);
const computer = new Jugador('Computer', 100);
const vista = new Vista();
const game = new Game(player, computer, vista);
/**
 * Explicació de game
 */
function resetGame() {
  allDeck = new Deck();
  allDeck.createDeck();
  game.resetGame(allDeck);
}
/**
 * Explicació de game
 */
function acabarTorn() {
  game.acabaTorn(allDeck);
}
/**
 * Explicació de game
 */
function agafarCartas() {
  game.jugada(allDeck, 'player');
}
/**
 * Explicació de game
 */
function startGames() {
  game.iniciar(allDeck);
}

vista.listen(resetGame, acabarTorn, agafarCartas, startGames);


