import { CartItem } from "./cart-item";
import { CartPayment } from "./cart-payment";
import { CartTotal } from "./cart-total";
import { calculateTotal } from "./service/cart-service";
export class Cart {
    private itens: CartItem[] = [];
    private payments: CartPayment[] = [];
    private total: CartTotal = new CartTotal();
    private discount: number = 0;
    private increase: number = 0;

    public setItem(id: string, description: string, amount: number, unitaryValue: number) {
        this.itens.push(new CartItem(id, description, amount, unitaryValue));
        calculateTotal(this);
    }

    public removeItem(id: string) {
        let index = this.itens.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
        return this.itens;
    }

    public setDiscount(id: string, discount: number){
        this.discount += discount;
    }

    
    public getDiscount(): number{
        return this.discount;
    }

    public getItens(): CartItem[] {
        return this.itens;
    }

    public getCartTotal(): CartTotal {
        return this.total;
    }

    public getTotal(): CartTotal {
        return this.total;
    }

    public loadCart() {
        return this;
    }

    public saveCart() {
        //transforma o cart em um JSON
    }


    public toJson(): string {
        return JSON.stringify(this);
    }

    public fromJson(json: string) {
        //TODO
    }
}
