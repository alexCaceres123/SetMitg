/**
 * Classe encarregada de cambiar / actualitzar el HTML i CSS
 */
export default class Vista {
  /**
   * Constructor on hi han totes les etiquetes del html que utilitzare
   */
  constructor() {
    this.buttonStartGame = document.querySelector('#start-game');
    this.buttonAgafarCarta = document.getElementById('agafarCarta');
    this.buttonAcabaTorn = document.getElementById('acabaTorn');
    this.playerCard = document.getElementById('player-cards');
    this.computerCard = document.getElementById('computer-cards');
    this.divPlayer = document.getElementById('player');
    this.divComputer = document.getElementById('computer');
    this.divPointsPlayer = document.getElementById('playerPoints');
    this.divPointsComputer = document.getElementById('computerPoints');
    this.divWinnerGame = document.getElementById('winner');
    this.buttonResetGame = document.getElementById('reset');
  }

  /**
   * Aquesta funcio es l'encarregada de fer els AddEventListener
   * dels diferents botons del joc i te les següents funcions:
   * - func1: crida la funcio resetGame de main
   * - func2: crida la funcio acabarTorn de main
   * - func3: crida la funcio agafarCartas de main
   * - func4: crida la funcio startGame de main
   * @param {main.resetGame} func1
   * @param {acabarTorn} func2
   * @param {agafarCartas} func3
   * @param {startGames} func4
   */
  listen(func1, func2, func3, func4) {
    this.buttonResetGame.addEventListener('click', () => {
      func1();
    });

    this.buttonAcabaTorn.addEventListener('click', function() {
      func2();
    });

    this.buttonAgafarCarta.addEventListener('click', function() {
      func3();
    });

    this.buttonStartGame.addEventListener('click', function() {
      func4();
    });
  };

  /**
   * funció encarregada de cambiar el wallpaper inicial de la
   * carta predeterminada del Player
   * @param {string} img
   */
  changeBackgroundCardPlayer(img) {
    this.playerCard.style.backgroundImage = 'url(\'' + img + '\')';
  }

  /**
   * funció encarregada de cambiar el wallpaper inicial de la
   * carta predeterminada del Computer
   * @param {string} img
   */
  changeBackgroundCardComputer(img) {
    this.computerCard.style.backgroundImage = 'url(\'' + img + '\')';
  }

  /**
   * Aquesta funció mostra els botons:
   * -resetGame
   * -agafarCarta
   * -acabarTorn
   * I posa en display none el boton StartGame
   */
  buttonsStartStyle() {
    this.buttonStartGame.style.display = 'None';
    this.buttonResetGame.style.display = 'block';
    this.buttonAgafarCarta.style.display = 'block';
    this.buttonAcabaTorn.style.display = 'block';
  }

  /**
   * Funció que afegeix la template de les cartes al div
   * del Player
   * @param {string} template
   */
  addDivPlayerCard(template) {
    this.divPlayer.innerHTML += template;
  }

  /**
   * Funció que afegeix la template de les cartes al div
   * del Computer
   * @param {string} template
   */
  addDivComputerCard(template) {
    this.divComputer.innerHTML += template;
  }

  /**
   *Al afegir una carta es l'encarregada de afegir els punts
   * en el div dels punts del Player
   * @param {int} points
   */
  addPointsInPlayerDiv(points) {
    this.divPointsPlayer.innerHTML += points;
  }

  /**
   * Al afegir una carta es l'encarregada de afegir els punts
   * en el div dels punts del Computer
   * @param {int} points
   */
  addPointsInComputerDiv(points) {
    this.divPointsComputer.innerHTML += points;
  }

  /**
   * Funció encarragada a posar en display none els botons:
   * -agafarCarta
   * -acabarTorn
   * xd
   */
  buttonsNoneStyle() {
    this.buttonAgafarCarta.style.display = 'none';
    this.buttonAcabaTorn.style.display = 'none';
  }

  /**
   * En aquesta funció li pasarem el nom del guanyador
   * i depenguent de qui sigui posara el divWinnerGame
   * a sobre del Player o del Computer
   * @param {string} nameWinner
   */
  stateDivWinnerGame(nameWinner) {
    if (nameWinner === 'player') {
      this.divWinnerGame.style.top = '30%';
      this.divWinnerGame.style.display = 'block';
    } else if (nameWinner === 'computer') {
      this.divWinnerGame.style.top = '70%';
      this.divWinnerGame.style.display = 'block';
    }
  }

  /**
   * Aquesta funció es crida al clicar el botor resetGame
   * i el que fa es posar el joc desde 0 resetejan la vista
   */
  resetVista() {
    this.divPlayer.innerHTML = '';
    this.divComputer.innerHTML = '';
    this.divPointsPlayer.innerHTML=`<p class="title_points">Player Points</p>`;
    const temp = `<p class="title_points">Computer Points</p>`;
    this.divPointsComputer.innerHTML = temp;
    this.divWinnerGame.style.display = 'None';
  }
}
