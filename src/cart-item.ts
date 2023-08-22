import { round } from "./service/currency-service"

export class CartItem {

    private id: string = ""
    private description: string = ""
    private amount: number = 0
    private unitaryValue: number = 0
    private total: number = 0;
    private discount: number = 0;
    private increase: number = 0;

    constructor(id: string, description: string, amount: number, unitaryValue: number) {
        this.id = id;
        this.description = description;
        this.amount;
        this.unitaryValue;
        this.calculateTotal(amount, unitaryValue);
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

    //TODO fiscal (futuro)
    */

    public getTotal(): number {
        return this.total;
    }

    private calculateTotal(amount: number, unitaryValue: number) {
        this.total = amount * unitaryValue;
    }
}