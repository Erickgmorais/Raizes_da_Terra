import { Producer } from "./Producer";
import { Donatable } from "../Interface/Donatable";
import { green, red, yellow } from "../Auxiliares/Colors";
import { typeCategory } from "../Auxiliares/Enum";

//Poderia fazer com enum as categorias.
export class Food implements Donatable{
    protected name: string;
    protected category: typeCategory;
    protected quantityKilos: number;
    protected responsibleProducer: Producer;

    constructor(name: string, category: typeCategory, quantityKilos: number, responsibleProducer: Producer) {
        this.name = name
        this.category = category;
        if(quantityKilos <= 0) {
            throw new Error('Invalid quantity! ');
            
        }
        this.quantityKilos = quantityKilos;
        this.responsibleProducer = responsibleProducer
    }

    public getType(): string {
        return 'Food'
    }

    public getName(): string {
        return this.name
    }

    public addQuantity(quantity: number): string {
        if(quantity <= 0) {
            return 'Invalid quantity! ';
        }

        this.quantityKilos += quantity;
        return '\nQuantity added! ' + '\nCurrent: ' + this.quantityKilos;
    }

    public removeQuantity(quantity: number): number {
        if(quantity <= 0) {
            red('Invalid quantity! ');
            return -1
        }
        green('\nQuantity removed! ' + '\nCurrent: ' + this.quantityKilos);
        return this.quantityKilos -= quantity;
    }

    public quantityQuery(): string {
        return 'Available quantity: ' + this.quantityKilos;
    }

    public showFood(): void {
        yellow(`
========================================
                  FOOD
========================================

  NAME            : ${this.name}
  CATEGORY        : ${this.category}
  QUANTITY KILOS  : ${this.quantityKilos}

========================================
    `);
    }

    donate(quantity: number): void {
        
    }
}