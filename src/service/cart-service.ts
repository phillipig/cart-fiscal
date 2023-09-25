import { Cart } from "../cart";
import { TypeDiscountEnum } from "../enum/TypeDiscountEnum";
import { round } from "./currency-service";

export function calculateTotal(cart: Cart) {
    let total: number = 0;
    let amount: number = 0;
    let discount: number = 0;
    let increase: number = 0;

    for (let item of cart.getItens()) {
        total += item.getTotal();
        amount += item.getAmout();
        discount += item.getDiscount();
        increase += item.getIncrease();
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

export function addDiscountItem(id: string, value: number, type: TypeDiscountEnum, cart: Cart,) {
    let valorProporcional = 0;
    let discount = value;

    if (type === "PERCENTAGE") {
        const percentage = value / 100;
        discount = cart.getTotal().getTotal() * percentage;
        
    }
    for (let item of cart.getItens()) {
        if (cart.getTotal().getTotal() > 0 && discount > 0) {
            if (type === "VALUE") {
                if (cart.getTotal().getTotal() > discount) {
                    valorProporcional = (item.amount * item.getTotal()) * (discount / (cart.getTotal().getTotal() - discount));
                    item.addDiscount(id, round(valorProporcional, 2));
                }
            } else {
                if (cart.getTotal().getTotal() > cart.getTotal().getTax()) {
                    valorProporcional = (item.amount * item.getTotal()) * (discount / (cart.getTotal().getTotal() - cart.getTotal().getTax()));
                    item.addDiscount(id, round(valorProporcional, 2));
                }
            }
        }
    }

    cart.setDiscount(id, valorProporcional);
    const totalValue = cart.getTotal().getTotal() - valorProporcional;
    cart.getTotal().setTotal(round(totalValue, 2));
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


