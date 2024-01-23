import { CartItem } from "@/cart-item";
import { TypeDiscountEnum } from "@/enum/TypeDiscountEnum";

describe('CartItem', () => {

  let cartItem: CartItem;

  beforeEach(() => {
    cartItem = new CartItem('1', 'Item 1', 2, 5);
  });

  describe('total', () => {
    it('deve calcular o total corretamente', () => {
        expect(cartItem.getTotal()).toBe(10); 
    });
  });

  describe('discount', () => {
    it('deve adicionar desconto corretamente', () => {
        cartItem.addDiscount('1', 2);
        expect(cartItem.getDiscount()).toBe(2);
      });

      it('deve remover desconto corretamente', () => {
        cartItem.addDiscount('1', 2);
        cartItem.removeDiscount('1');
        expect(cartItem.getDiscount()).toBe(0);
      });
  });

  describe('increase', () => {
    it('deve remover acréscimo corretamente, ao adicionar e remover', () => {
      cartItem.addIncrease('1', 10, TypeDiscountEnum.VALUE); 
      cartItem.removeIncrease('1');
      expect(cartItem.getIncrease()).toBe(0);
    });
  
    it('deve remover item e deixa-lo com valor 0', () => {
      cartItem.removeItem('1');
      expect(cartItem.getTotal()).toBe(0);
    });

    it('deve adicionar acréscimo corretamente', () => {
        cartItem.addIncrease('1', 10, TypeDiscountEnum.VALUE);
        expect(cartItem.getIncrease()).toBe(10);
      });
  });
});