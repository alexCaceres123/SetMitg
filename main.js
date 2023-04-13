let allDeck = new Deck();
let player = new jugador("Player", 100);
let computer = new jugador("Computer", 100);
let game = new Game(player, computer);
let startGame = document.getElementById("start-game");

allDeck.createDeck();

startGame.addEventListener('click', function(){
    game.iniciar(allDeck)
})





