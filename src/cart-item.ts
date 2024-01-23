import { TypeDiscountEnum } from "./enum/TypeDiscountEnum"
export class CartItem {
    public id: string = ""
    public description: string = ""
    public amount: number = 0
    public unitaryValue: number = 0
    public total: number = 0;
    public discount: number = 0;
    public increase: number = 0;

    constructor(id: string, description: string, amount: number, unitaryValue: number, discount?: number, increase?:number) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.unitaryValue= unitaryValue;
        this.discount = discount ? discount : 0;
        this.increase = increase ? increase : 0;
        this.calculateTotal(amount, unitaryValue);
    }
    
    public removeItem(id: string){ 
        if(this.id === id) {
            const itemTotal = this.amount * this.unitaryValue;
            this.total -= itemTotal;
        
            this.id = '';
            this.description = '';
            this.amount = 0;
            this.unitaryValue = 0;
            this.discount = 0;
            this.increase = 0;
          }
    }

    public getTotal(): number {
        return this.total;
    }

    public addDiscount(id: string, value: number) {
        this.discount = value;
    }
    
    public removeDiscount(id: string) {
        if (this.id === id) {
            this.total = this.total + this.discount;
            this.discount = 0;
        }
    }

    getIncrease() {
        return this.increase;
    }
    
    getAmout() {
        return this.amount;
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