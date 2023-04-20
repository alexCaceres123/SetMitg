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
 * Funció que al clicar el boto reset de vista, crearà una nova deck
 * i cridarà la funcio resetGame de la clase Game
 */
function resetGame() {
  allDeck = new Deck();
  allDeck.createDeck();
  game.resetGame(allDeck);
}

/**
 * Funció que al clicar el boto de la vista acabar
 * torn, cridara la funcio acabar torn de Game
 */
function acabarTorn() {
  game.acabaTorn(allDeck);
}

/**
 * Funció que al clicar el boto de la vista agafar
 * carta, cridara la funcio jugada de Game
 */
function agafarCartas() {
  game.jugada(allDeck, 'player');
}

/**
 * Funció que al clicar el boto de la vista start
 * game, cridara la funcio iniciar de Game
 */
function startGames() {
  game.iniciar(allDeck);
}

vista.listen(resetGame, acabarTorn, agafarCartas, startGames);


