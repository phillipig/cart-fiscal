export class CartTotal {

    private total: number = 0;
    private discount: number = 0;
    private increase: number = 0;
    private tax: number = 0;

    public getCartTotal(): CartTotal {
        return this;
    }

    public setTotal(total: number) {
        this.total = total;
    }

    public setTax(tax: number) {
        this.tax = tax;
    }

    public getTax(): number {
        return this.tax;
    }

    public getTotal(): number {
        return this.total;
    }
}