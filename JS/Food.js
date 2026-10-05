"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, category, quantityKilos) {
        this.responsibleProducer = [];
        this.name = name;
        this.category = category;
        if (quantityKilos <= 0) {
            throw new Error('Invalid quantity! ');
        }
        this.quantityKilos = quantityKilos;
        this.responsibleProducer;
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
            return 'Invalid quantity! ';
        }
        this.quantityKilos -= quantity;
        return '\nQuantity removed! ' + '\nCurrent: ' + this.quantityKilos;
    }
    quantityQuery() {
        return 'Available quantity: ' + this.quantityKilos;
    }
    showFood() {
        return `
╔════════════════════════════════════╗
║              PRODUTO               ║
╠════════════════════════════════════╣
║ Nome:         ${this.name}                 ║
║ Categoria:    ${this.category}                ║
║ Quantidade:   ${this.quantityKilos}           ║
║ Produtor(es): ${this.responsibleProducer.forEach((p, i) => { i + 1 + p.getName(); })}                    ║
╚════════════════════════════════════╝`;
    }
}
exports.Food = Food;
