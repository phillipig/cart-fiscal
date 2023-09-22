import { Cart } from "../cart";
import { TypeDiscountEnum } from "../enum/TypeDiscountEnum";
import { round } from "./currency-service";

export function calculateTotal(cart: Cart) {
    let total: number = 0;
    let discount: number = 0;
    let increase: number = 0;

    for (let item of cart.getItens()) {
        total += item.getTotal();
    }
    
    cart.getTotal().setTotal(round(total));
}

export function addDiscount(id:string, value: number, type: TypeDiscountEnum, cart: Cart){
   
    if (type === "PERCENTAGE") {
        const percentage = value / 100;
        let discount = cart.getTotal().getTotal() * percentage;
        const discountTotal = (cart.getTotal().getTotal() - discount);
        cart.getTotal().setTotal(round(discountTotal, 2));
    } else if (type === "VALUE") {
        const discountTotal = cart.getTotal().getTotal() - value;
        cart.getTotal().setTotal(round(discountTotal, 2));
    }
}

export function addIncrease(id: string, value: number, type: TypeDiscountEnum, cart: Cart) {
    if (type === "PERCENTAGE") {
        const percentage = value / 100;
        const increase = cart.getTotal().getTotal() * percentage;
        const increateTotal = (cart.getTotal().getTotal() + increase);
        cart.getTotal().setTotal(round(increateTotal));
    } else if (type === "VALUE") {
        const increateTotal = (cart.getTotal().getTotal() + value);
         cart.getTotal().setTotal(round(increateTotal));
    }

    calculateTotal(cart);
}


