import { CartItem } from "./cart-item";
import { CartPayment } from "./cart-payment";

export class Cart {

    private total = 0;
    private itens: CartItem[] = [];
    private payments: CartPayment[] = [];

    public getTotal() {
        return this.total;
    }
}