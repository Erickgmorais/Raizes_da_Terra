"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const Colors_1 = require("../Auxiliares/Colors");
class Registry {
    constructor(items) {
        this.items = [];
        this.items = items;
    }
    add(items) {
        this.items.push(items);
    }
    list() {
        this.items.forEach((e, i) => {
            (0, Colors_1.green)('\n' + (i + 1) + ' - ' + e.getType() + ' - ' + e.getName());
        });
    }
    find(predicate) {
        return this.items.find(predicate);
    }
}
exports.Registry = Registry;
