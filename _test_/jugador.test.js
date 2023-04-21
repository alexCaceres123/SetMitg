import Jugador from '../jugador.js';
import Card from '../card.js';
describe('Unit test Jugador', () => {
  test('Creació jugador', () => {
    const player = new Jugador('Player');
    expect(player.name).toBe('Player');
    expect(player.points).toBe(0);
    expect(player.cards.length).toBe(0);
  });

  test('Afegir carta al jugador', () => {
    const player = new Jugador('Player');
    const carta = new Card('oros', 5, 5);
    player.hit(carta);
    expect(player.cards[0].suit).toBe('oros');
    expect(player.cards[0].value).toBe(5);
    expect(player.cards[0].number).toBe(5);
  });

  test('Veure tots els punts del jugador', () => {
    const player = new Jugador('Player');
    const carta = new Card('oros', 5, 5);
    player.hit(carta);
    const points = player.allPoints();
    expect(points).toBe(carta.value);
  });

  test('Resetejar els stats del jugador', () => {
    const player = new Jugador('Player');
    const carta = new Card('oros', 5, 5);
    player.hit(carta);
    player.resetStats();
    expect(player.points).toBe(0);
    expect(player.cards.length).toBe(0);
  });
});
