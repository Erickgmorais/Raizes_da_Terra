"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducer = void 0;
const Colors_1 = require("../Auxiliares/Colors");
const Producer_1 = require("./Producer");
class CreateProducer extends Producer_1.Producer {
    constructor(name, identify, producedFoods) {
        super(name, identify, producedFoods);
    }
    showProducer() {
        (0, Colors_1.blue)(`
========================================
              PRODUCER
========================================

  NAME   : ${this.name}
  ID     : ${this.identify}
  FOODS  : ${this.producedFoods}

========================================
    `);
    }
}
exports.CreateProducer = CreateProducer;
