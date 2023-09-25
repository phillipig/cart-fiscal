import { Cart } from "../src/cart";
import { TypeDiscountEnum } from "../src/enum/TypeDiscountEnum";
import { addDiscount, addDiscountItem, addIncrease } from "../src/service/cart-service";
import { round } from "../src/service/currency-service";

let cart: Cart;

beforeEach(() => {
    cart = new Cart();
});

describe("Cart", () => {
    it("Verificando arredodamento matemático", () => {
        const num1 = 1.01;
        const rounded = round(1.005);
        expect(rounded).toBe(num1);
    });

    it("Verificando se o total do Cart está zerado", () => {
        expect(cart.getCartTotal().getTotal()).toBe(0);
    });

    it("Adicionando itens ao cart", () => {
        cart.setItem("cart-1", "mesa-1", 2, 2);
        cart.setItem("cart-2", "mesa-2", 2, 2);
        cart.setItem("cart-3", "mesa-3", 2, 2);
        cart.setItem("cart-4", "mesa-4", 2, 2);
        expect(cart.getItens().length).toBe(4);
    });

    it("Removendo um item do cart por id e verificando o total após a remoção", () => {
        cart.setItem("cart-1", "mesa-1", 1.5, 2.5);
        cart.setItem("cart-2", "mesa-2", 2.25, 3.75);
        cart.setItem("cart-3", "mesa-3", 3.33, 4.67)
        cart.removeItem("cart-2");
        const total = cart.getCartTotal().getTotal();
        const rounded = round(total);

        expect(total).toBeCloseTo(rounded, 6);
        
        expect(cart.getItens().length).toBe(2);
    });

    it("Adicionando desconto no total do cart", () => {
        cart.setItem("cart-1", "mesa-1", 1.5, 2.5);
        cart.setItem("cart-2", "mesa-2", 2.25, 3.75);
        cart.setItem("cart-3", "mesa-3", 3.33, 4.67)
        addDiscount("discount-1", 10, TypeDiscountEnum.PERCENTAGE, cart);
        const totalBeforeDiscount = cart.getCartTotal().getTotal();
        addDiscount("discount-2", 5, TypeDiscountEnum.VALUE, cart);
        const totalAfterDiscount = cart.getCartTotal().getTotal();
    
        expect(totalBeforeDiscount).toBeGreaterThan(totalAfterDiscount);
      });

    it("Verificando o total do cart", () => {
        cart.setItem("cart-1", "mesa-1", 2, 2.5);
        cart.setItem("cart-2", "mesa-2", 3, 3.75);
        cart.setItem("cart-3", "mesa-3", 4, 4.67);

        const total = cart.getCartTotal().getTotal();
        const rounded = round(total);
        expect(total).toBeCloseTo(rounded, 6);
    });

    it("Adicionando desconto quebrado nos itens, tipo desconto 'VALUE'", () => {
        cart.setItem("cart-1", "mesa-1", 2, 2.5);
        cart.setItem("cart-2", "mesa-2", 2, 3.75);
        cart.setItem("cart-3", "mesa-3", 3, 4.67);
        const totalBeforeDiscount = cart.getCartTotal().getTotal();
        addDiscountItem("cart-2", 10, TypeDiscountEnum.VALUE, cart);
        const totalAfterDiscount = cart.getCartTotal().getTotal();
        expect(totalBeforeDiscount).toBeGreaterThan(totalAfterDiscount);
    });

    it("Adicionando desconto quebrado nos itens, tipo desconto 'PERCENTAGE'", () => {
        cart.setItem("cart-1", "mesa-1", 2, 2.5);
        cart.setItem("cart-2", "mesa-2", 2, 3.75);
        cart.setItem("cart-3", "mesa-3", 3, 4.67);
        const totalBeforeDiscount = cart.getCartTotal().getTotal();
        addDiscountItem("cart-2", 20, TypeDiscountEnum.PERCENTAGE, cart);
        const totalAfterDiscount = cart.getCartTotal().getTotal();
        expect(totalBeforeDiscount).toBeGreaterThan(totalAfterDiscount);
    });
});