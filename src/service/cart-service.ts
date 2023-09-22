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
        cart.getTotal().setTotal(cart.getTotal().getTotal() - discount);
    } else if (type === "VALUE") {
        cart.getTotal().setTotal(cart.getTotal().getTotal() - value);
    }
}

export function addIncrease(id: string, value: number, type: TypeDiscountEnum, cart: Cart) {
    if (type === "PERCENTAGE") {
        const percentage = value / 100;
        const increase = cart.getTotal().getTotal() * percentage;
         cart.getTotal().setTotal(cart.getTotal().getTotal() + increase);
    } else if (type === "VALUE") {
         cart.getTotal().setTotal(cart.getTotal().getTotal() + value);
    }

    calculateTotal(cart);
}


