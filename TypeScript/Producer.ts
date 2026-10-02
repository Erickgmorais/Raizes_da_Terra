export abstract class Producer {
    protected name: string;
    private identify: string;
    protected producedFoods: number;

    constructor(name: string, identify: string, producedFoods: number) {
        this.name = name;
        this.identify = identify;
        this.producedFoods = producedFoods;
    }

    public abstract present(): void
}