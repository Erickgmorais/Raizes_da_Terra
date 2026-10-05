"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const Colors_1 = require("../Auxiliares/Colors");
//Poderia fazer com enum as categorias.
class Food {
    constructor(name, category, quantityKilos, responsibleProducer) {
        this.name = name;
        this.category = category;
        if (quantityKilos <= 0) {
            throw new Error('Invalid quantity! ');
        }
        this.quantityKilos = quantityKilos;
        this.responsibleProducer = responsibleProducer;
    }
    getType() {
        return 'Food';
    }
    getName() {
        return this.name;
    }
    addQuantity(quantity) {
        if (quantity <= 0) {
            return 'Invalid quantity! ';
        }
        this.quantityKilos += quantity;
        return '\nQuantity added! ' + '\nCurrent: ' + this.quantityKilos;
    }
    removeQuantity(quantity) {
        if (quantity <= 0) {
            (0, Colors_1.red)('Invalid quantity! ');
            return -1;
        }
        (0, Colors_1.green)('\nQuantity removed! ' + '\nCurrent: ' + this.quantityKilos);
        return this.quantityKilos -= quantity;
    }
    quantityQuery() {
        return 'Available quantity: ' + this.quantityKilos;
    }
    showFood() {
        (0, Colors_1.yellow)(`
========================================
                  FOOD
========================================

  NAME            : ${this.name}
  CATEGORY        : ${this.category}
  QUANTITY KILOS  : ${this.quantityKilos}

========================================
    `);
    }
    donate(quantity) {
    }
}
exports.Food = Food;
