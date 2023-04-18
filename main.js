let allDeck = new Deck();
allDeck.createDeck();
let player = new jugador("Player", 100);
let computer = new jugador("Computer", 100);
let vista = new Vista();
let game = new Game(player, computer, vista);

function resetGame(){
    allDeck = new Deck();
    allDeck.createDeck();
    game.resetGame(allDeck);
}

function acabarTorn(){
    game.acabaTorn(allDeck);
}

function agafarCartas(){
    game.jugada(allDeck, "player");
}

function startGames(){
    game.iniciar(allDeck);
}

vista.listen(resetGame, acabarTorn, agafarCartas, startGames);






