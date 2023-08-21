export class CartTotal {

    private total: number = 0;
    private discount: number = 0;
    private increase: number = 0;

    public getTotal(): CartTotal {
        return this;
    }
}