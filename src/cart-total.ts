export class CartTotal {

    private total: number = 0;
    private discount: number = 0;
    private increase: number = 0;

    public getCartTotal(): CartTotal {
        return this;
    }

    public setTotal (total: number) {
        this.total = total;
    }

    public getTotal (): number {
        return this.total;
    }
}