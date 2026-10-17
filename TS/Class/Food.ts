import { Producer } from "./Producer";
import { Donatable } from "../Interface/Donatable";
import { green, yellow } from "../Auxiliares/Colors";
import { typeCategory } from "../Auxiliares/Enum";
import { Institution } from "./Institution";
import { ask } from "../Auxiliares/Auxiliares";
import { clear } from "node:console";


export class Food implements Donatable{
    protected name: string;
    protected category: typeCategory;
    protected quantityKilos: number;
    protected currentStock: number;
    protected responsibleProducer: Producer;

    constructor(name: string, category: typeCategory, quantityKilos: number, currentStock: number, responsibleProducer: Producer) {
        this.name = name
        this.category = category;
        if(quantityKilos <= 0) {
            throw new Error(' !! INVALID QUANTITY !! ');
            
        }
        this.quantityKilos = quantityKilos;
        this.currentStock = currentStock;
        this.responsibleProducer = responsibleProducer;
    }

    public getType(): string {
        return 'Food'
    }

    public getName(): string {
        return this.name
    }

    public getStock(): number {
        return this.currentStock
    }

    public getCurrentStock(): number {
        return this.currentStock
    }

    public addQuantity(quantity: number): string {
        if(quantity <= 0) {
            return 'Invalid quantity! ';
        }

        this.quantityKilos += quantity;
        return '\nQuantity added! ' + '\nCurrent: ' + this.quantityKilos;
    }

    public removeStock(quantity: number): number {
        if(quantity <= 0) {
            throw new Error(' !! INVALID QUANTITY !! ');
        }
        green('\nQuantity removed! ' + '\nCurrent Stock: ' + this.currentStock);
        return this.currentStock -= quantity;
    }

    public quantityQuery(): string {
        return 'Current Stock: ' + this.currentStock;
    }

    public showList(): string {
        return `
========================================
                  FOOD
========================================

  NAME            : ${this.name}
  CATEGORY        : ${typeCategory[this.category]}
  CURRENT STOCK   : ${this.currentStock}

========================================
    `;
    }

    donate(food: Food, instituion: Institution[]): void {
    
        while(true) {
            clear();
            instituion.forEach((e, i) => {
                yellow('\n' + (i + 1) + ' - ' + e.showList()); 
            });
    
            const chooseInstitution: number = Number(ask.question('Choose the institution: ')) - 1;
            
            const optionUser: boolean = chooseInstitution < 0 || chooseInstitution > instituion.length -1 || isNaN(Number(chooseInstitution))
            
            if(optionUser) {
                throw new Error(' !! INVALID OPTION !! ');
            }
            instituion[chooseInstitution].receiveFood(food);
            return;
        }
    }
}