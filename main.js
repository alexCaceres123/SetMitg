let allDeck = new Deck();
allDeck.createDeck();
let player = new jugador("Player", 100);
let computer = new jugador("Computer", 100);
let vista = new Vista();
let game = new Game(player, computer, vista);


vista.buttonResetGame.addEventListener('click', function(){
    allDeck = new Deck();
    allDeck.createDeck();
    game.resetGame(allDeck);
})

vista.buttonAcabaTorn.addEventListener('click', function(){
    game.acabaTorn(allDeck);
})

vista.buttonAgafarCarta.addEventListener('click', function(){
    game.jugada(allDeck, "player");
})

vista.buttonStartGame.addEventListener('click', function(){
    game.iniciar(allDeck);
})






