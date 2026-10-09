"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducer = void 0;
const Producer_1 = require("./Producer");
class CreateProducer extends Producer_1.Producer {
    constructor(name, identify, producedFoods) {
        super(name, identify, producedFoods);
    }
    showProducer() {
        return `
========================================
              PRODUCER
========================================

  NAME   : ${this.name}
  ID     : ${this.identify}
  FOODS  : ${this.producedFoods}

========================================
    `;
    }
}
exports.CreateProducer = CreateProducer;
