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

    /*
    //TODO
    public removeItem(id: string){ 

    }

    //TODO
    public addDiscount(id, value, type [PERCENTAGE | VALUE]) {

    }

    //TODO
    public removeDiscount(id) {

    }

    //TODO
    public addIncrease(id, value, type [PERCENTAGE | VALUE]) {

    }

    //TODO
    public removeIncrease(id) {

    }
    */

    public getCartTotal(): CartTotal {
        return this.total;
    }

    private calculateTotal() {
        let t: number = 0;
        let d: number = 0;
        let i: number = 0;

        for (let item of this.itens) {
            t += item.getTotal();
        }

        this.total.setTotal(t);
    }

    public toJson(): string{
        return JSON.stringify(this);
    }

    public fromJson(json: string){
        //TODO
    }
}