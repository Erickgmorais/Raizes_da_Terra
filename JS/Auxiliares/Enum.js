"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showType = exports.typeCategory = void 0;
const Colors_1 = require("./Colors");
var typeCategory;
(function (typeCategory) {
    typeCategory[typeCategory["GRAINS"] = 0] = "GRAINS";
    typeCategory[typeCategory["VEGETALES"] = 1] = "VEGETALES";
    typeCategory[typeCategory["FRUITS"] = 2] = "FRUITS";
    typeCategory[typeCategory["PULSES_OR_LEGUMES"] = 3] = "PULSES_OR_LEGUMES";
    typeCategory[typeCategory["NUTS"] = 4] = "NUTS";
    typeCategory[typeCategory["OTHERS"] = 5] = "OTHERS";
})(typeCategory || (exports.typeCategory = typeCategory = {}));
const showType = () => {
    (0, Colors_1.yellow)(` 
╔══════════════════════════════════════╗
║           CATEGORY TYPES             ║
╠══════════════════════════════════════╣
║  Choose one type !                   ║
╠══════════════════════════════════════╣
║  1 - GRAINS                          ║
║  2 - VEGETABLES                      ║
║  3 - FRUITS                          ║
║  4 - PULSE/LEGUMES                   ║
║  5 - NUTS                            ║
║  6 - OTHERS                          ║
╚══════════════════════════════════════╝`);
};
exports.showType = showType;
