import { Cart } from "../cart";
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