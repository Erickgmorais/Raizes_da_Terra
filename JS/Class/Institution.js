"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
const Colors_1 = require("../Auxiliares/Colors");
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const node_console_1 = require("node:console");
class Institution {
    constructor(name, addres, numberPeopleServed) {
        this.recivedDonated = [];
        this.name = name;
        this.addres = addres;
        if (numberPeopleServed < 0) {
            throw new Error(' !! INVALID NUMBER !!');
        }
        this.numberPeopleServed = numberPeopleServed;
    }
    getType() {
        return 'Institution';
    }
    getName() {
        return this.name;
    }
    receiveFood(food) {
        if (food.length === 0) {
            (0, Colors_1.red)(' !! NO FOOD AVAILABLE !! ');
            return;
        }
        food.forEach((e, i) => {
            (0, Colors_1.yellow)(`\n${i + 1} - ${e.getName()}`);
        });
        const choose = Number(Auxiliares_1.ask.question('Choose your donate: '));
        if (choose <= 0 || choose > food.length) {
            (0, Colors_1.red)(' !! INVALID OPTION !! ');
            return;
        }
        const donatedFood = food[choose - 1];
        this.recivedDonated.push(donatedFood);
        (0, node_console_1.clear)();
        (0, Colors_1.cyan)(`
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
    showInstitution() {
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
exports.Institution = Institution;
