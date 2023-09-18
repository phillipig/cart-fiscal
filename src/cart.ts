import { CartItem } from "./cart-item";
import { CartPayment } from "./cart-payment";
import { CartTotal } from "./cart-total";
import { calculateTotal } from "./service/cart-service";
export class Cart {

    private itens: CartItem[] = [];
    private payments: CartPayment[] = [];
    private total: CartTotal = new CartTotal();

    public addItem(id: string, description: string, amount: number, unitaryValue: number) {
        this.itens.push(new CartItem(id, description, amount, unitaryValue));
        calculateTotal(this);
    }

    public getItens() : CartItem[] {
        return this.itens;
    }

    public getTotal(): CartTotal {
        return this.total;
    }

    //TODO
    removeItem(id: string){

    }

    getItem(id: string) {

    }

    public loadCart(){
        //carrega o cart de um JSON
    }

    public saveCart(){
        //transforma o cart em um JSON
    }

    public getCartTotal(): CartTotal {
        return this.total;
    }
}