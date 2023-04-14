let allDeck = new Deck();
let player = new jugador("Player", 100);
let computer = new jugador("Computer", 100);
let vista = new Vista();
let game = new Game(player, computer, vista);
let startGame = document.getElementById("start-game");
let agafarCartaButton = document.getElementById("agafarCarta");

allDeck.createDeck();


agafarCartaButton.addEventListener('click', function(){
    game.getPlayerCard(allDeck);
})


startGame.addEventListener('click', function(){
    game.iniciar(allDeck);
})





