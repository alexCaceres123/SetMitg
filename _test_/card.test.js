import Card from '../card.js';
describe('Creació de una carta', () => {
  test('Comprobació de les propietats de la carta', () => {
    const carta = new Card('oros', 5, 5);
    expect(carta.suit).toBe('oros');
    expect(carta.number).toBe(5);
    expect(carta.value).toBe(5);
  });
});
