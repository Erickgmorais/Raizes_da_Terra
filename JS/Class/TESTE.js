"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteClass = void 0;
const Producer_1 = require("./Producer");
class TesteClass extends Producer_1.Producer {
    constructor() {
        super('Erick', '123', 14);
    }
    showProducer() {
    }
}
exports.TesteClass = TesteClass;
