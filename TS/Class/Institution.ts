import { Food } from "./Food";
import { cyan } from "../Auxiliares/Colors";
import { ask } from "../Auxiliares/Auxiliares";
import { clear } from "node:console";

export class Institution {
    protected name: string
    protected addres: string;
    protected numberPeopleServed: number;
    private recivedDonated: Food[] = []

    constructor(name: string, addres: string, numberPeopleServed: number) {
        this.name = name;
        this.addres = addres;
        if(numberPeopleServed < 0) {
            throw new Error(' !! INVALID NUMBER !!');
        }
        this.numberPeopleServed = numberPeopleServed;
    }

    public getType(): string {
        return 'Institution'
    }

    public getName(): string {
        return this.name
    }

    public receiveFood(food: Food): void {
        clear();
        const quantityDonate: number = Number(ask.question('Enter the quantity: '));

        const optionUSer: boolean = quantityDonate <= 0 || food.getCurrentStock() - quantityDonate < 0 || isNaN(Number(quantityDonate))

        if(optionUSer) {
            throw new Error(' !! INVALID QUANTITY !! ');
        }

        food.removeStock(quantityDonate);
        const donatedFood: Food = food;
        this.recivedDonated.push(donatedFood);
        clear();
        cyan(`
==================================================
                 DONATION RECEIPT
==================================================

  STATUS       : DONATION COMPLETED

  FOOD         : ${donatedFood.getName()}
  INSTITUTION  : ${this.name}
  ADDRESS      : ${this.addres}
  PEOPLE SERVED: ${this.numberPeopleServed}

--------------------------------------------------
        Thank you for your contribution!
==================================================
        `);
    }

    public showList(): string {
        return `
========================================
               INSTITUTION
========================================

  NAME           : ${this.name}
  ADDRESS        : ${this.addres}
  PEOPLE SERVED  : ${this.numberPeopleServed}

========================================
    `;
    }
}
