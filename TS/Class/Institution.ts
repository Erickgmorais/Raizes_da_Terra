import { Food } from "./Food";
import { cyan, red, yellow } from "../Auxiliares/Colors";
import { ask } from "../Auxiliares/Auxiliares";
import { clear } from "node:console";
import { stop } from "../Auxiliares/Auxiliares";

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

    public receiveFood(food: Food[]): void {
        if (food.length === 0) {
            red(' !! NO FOOD AVAILABLE !! ');
            return;
        }

        food.forEach((e, i) => {
            yellow(`\n${i + 1} - ${e.getName()}`);
        });

        const choose: number = Number(ask.question('Choose your donate: '));

        if (choose <= 0 || choose > food.length) {
            red(' !! INVALID OPTION !! ');
            return;
        }

        const donatedFood: Food = food[choose - 1];
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

    public showInstitution(): string {
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
