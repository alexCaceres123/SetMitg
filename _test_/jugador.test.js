import Deck from '../deck.js';
import Card from '../card.js';

describe('Unit test Deck', () => {
  test('Deck buida = undefined', () => {
    const allcards = new Deck();
    expect(allcards.cards.length).toBe(0);
  });

  test('Creació de la deck', () => {
    const allcards = new Deck();
    allcards.createDeck();
    expect(allcards.cards.length).toBe(40);
  });

  test('Borrar carta random de Deck', () => {
    const allcards = new Deck();
    allcards.createDeck();
    allcards.pop(5);
    expect(allcards.cards.length).toBe(39);
  });

  test('Agafar carta', () => {
    const cartaAfegida = new Card('oros', 5, 5);
    const allcards = new Deck();
    allcards.cards.push(cartaAfegida);
    const carta = allcards.getCard();
    expect(carta.suit).toBe(cartaAfegida.suit);
    expect(carta.value).toBe(cartaAfegida.value);
    expect(carta.number).toBe(cartaAfegida.number);
  });
});
