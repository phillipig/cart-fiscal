import { CartTotal } from "./cart-total"
import { TypeDiscountEnum } from "./enum/TypeDiscountEnum"
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

    public addDiscount(id: string, value: number, type: TypeDiscountEnum) {
        if (this.id === id) {
            if (type === "PERCENTAGE") {
                const percentage = value / 100;
                this.discount = this.total * percentage;
                this.total = this.total - this.discount;
            } else if (type === "VALUE") {
                this.discount = value;
                this.total = this.total - this.discount;
            }
        }
    }
    
    public removeDiscount(id: string) {
        if (this.id === id) {
            this.total = this.total + this.discount;
            this.discount = 0;
        }
    }
    
    public addIncrease(id: string, value: number, type: TypeDiscountEnum) {
        if (this.id === id) {
            if (type === "PERCENTAGE") {
                const percentage = value / 100;
                this.increase = this.total * percentage;
                this.total = this.total + this.increase;
            } else if (type === "VALUE") {
                this.increase = value;
                this.total = this.total + this.increase;
            }
        }
    }
    
    public removeIncrease(id: string) {
        if (this.id === id) {
            this.total = this.total - this.increase;
            this.increase = 0;
        }
    }

    public getDiscount(): number {
        return this.discount;
    }

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