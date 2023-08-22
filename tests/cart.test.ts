import { Cart } from "../src/cart";

describe('*** Teste básico do Objeto Cart ***', () => {

    let cart = new Cart();

    test('Verificando se o total do Cart está zerado', () => {
        expect(cart.getCartTotal().getTotal()).toBe(0);
    });

    test('Verificando se o total do Cart agora está dando 4', () => {
        cart.addItem("a", "aaa", 2, 2);
        expect(cart.getCartTotal().getTotal()).toBe(4);
    });
});