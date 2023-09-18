import { Cart } from "../cart";

export function calculateTotal(cart: Cart) {
    let t: number = 0;
    let d: number = 0;
    let i: number = 0;

    for (let item of cart.getItens()) {
        t += item.getTotal();
    }

    cart.getTotal().setTotal(t);
}