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

    //TODO
    removeItem(id: string){
        let index = this.itens.findIndex((item) => item.id === id);
        if(index !== -1) {
            this.itens.splice(index, 1);
        }
        return this.itens;
    }
    

    public getItem(id: string) {

    }

    public getItens(): CartItem[] {
        return this.itens;
    }

    public getTotal(): CartTotal {
        return this.total;
    }

    public loadCart(){
        return this;
    }

    public saveCart(){
        //transforma o cart em um JSON
    }


    public toJson(): string{
        return JSON.stringify(this);
    }

    public fromJson(json: string){
        //TODO
    }
}
