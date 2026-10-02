export class Food {
    protected name: string;
    protected category: string;
    protected quantityKG: number;
    protected responsibleProducer: [] = [];

    constructor(name: string, category: string, quantityKG: number, responsibleProducer: []) {
        this.name = name
        this.category = category;
        this.quantityKG = quantityKG;
        this.responsibleProducer = responsibleProducer;
    }

    
}