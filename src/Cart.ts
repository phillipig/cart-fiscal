import { CartItem } from "./CartItem";
import { CartPayment } from "./CartPayment";

export class Cart {

    private total = 0;
    private itens: CartItem[] = [];
    private payments: CartPayment[] = [];

    public getTotal() {
        return this.total;
    }
}