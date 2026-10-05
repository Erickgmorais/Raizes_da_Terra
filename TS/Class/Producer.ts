export abstract class Producer {
    protected name: string;
    protected identify: string;
    protected producedFoods: number;

    constructor(name: string, identify: string, producedFoods: number) {
        this.name = name;
        this.identify = identify;
        this.producedFoods = producedFoods;
    }

    public getType(): string {
        return 'Producer'
    }

    public getName(): string {
        return this.name
    }

    public abstract showProducer(): void
}