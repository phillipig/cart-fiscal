import { CartTotal } from "./cart-total"
import { round } from "./service/currency-service"

export class CartItem {

    public id: string = ""
    public description: string = ""
    public amount: number = 0
    public unitaryValue: number = 0
    public total: number = 0;
    public discount: number = 0;
    public increase: number = 0;

    constructor(id: string, description: string, amount: number, unitaryValue: number) {
        this.id = id;
        this.description = description;
        this.amount;
        this.unitaryValue;
        this.calculateTotal(amount, unitaryValue);
    }

    
    //TODO
    public removeItem(id: string){ 
    }

    public getTotal(): number {
        return this.total;
    }

    // //TODO
    // public addDiscount(id, value, type [PERCENTAGE | VALUE]) {

    // }

    // //TODO
    // public removeDiscount(id) {

    // }

    // //TODO
    // public addIncrease(id, value, type [PERCENTAGE | VALUE]) {

    // }

    // //TODO
    // public removeIncrease(id) {

    // }

    // public getTotal(): number {
    //     return this.total;
    // }

    //TODO fiscal (futuro)

    //TODO
    // addDiscount(id)

    // removeDiscount(){

    // }

    // addIncrease()

    // removeIncrease()

    // addTaxes()

    // addPis
    // addCofins
    // addIcms

    private calculateTotal(amount: number, unitaryValue: number) {
        this.total = amount * unitaryValue;
    }
}