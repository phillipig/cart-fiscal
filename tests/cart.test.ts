import { Cart } from "../src/cart2";

describe('*** Teste básico do Objeto Cart ***', () => {

    let cart = new Cart();

    test('Verificando se o total do Cart está zerado', () => {
      expect(cart.getTotal()).toBe(0);
    });
});