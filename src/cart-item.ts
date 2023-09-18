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

    public getTotal(): number {
        return this.total;
    }

    //TODO
    /*addDiscount(id)

    removeDiscount(){

    }

    addIncrease()

    removeIncrease()

    addTaxes()

    addPis
    addCofins
    addIcms*/

    private calculateTotal(amount: number, unitaryValue: number) {
        this.total = amount * unitaryValue;
    }
}