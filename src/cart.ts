import { CartItem } from "./cart-item";
import { CartPayment } from "./cart-payment";
import { CartTotal } from "./cart-total";

export class Cart {

    private itens: CartItem[] = [];
    private payments: CartPayment[] = [];
    private total: CartTotal = new CartTotal();

    public addItem(id: string, description: string, amount: number, unitaryValue: number) {
        this.itens.push(new CartItem(id, description, amount, unitaryValue));
        this.calculateTotal();
    }

    public getCartTotal(): CartTotal {
        return this.total;
    }

    private calculateTotal() {
        let t: number = 0;
        for (let item of this.itens) {
            t += item.getTotal();
        }
        this.total.setTotal(t);
    }
}