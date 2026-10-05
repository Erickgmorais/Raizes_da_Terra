"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    constructor(name, identify, producedFoods) {
        this.name = name;
        this.identify = identify;
        this.producedFoods = producedFoods;
    }
    getName() {
        return this.name;
    }
}
exports.Producer = Producer;
