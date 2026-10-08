"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showType = exports.typeCategory = void 0;
const Colors_1 = require("./Colors");
var typeCategory;
(function (typeCategory) {
    typeCategory[typeCategory["CITRUS_FRUITS"] = 0] = "CITRUS_FRUITS";
    typeCategory[typeCategory["BERRIES"] = 1] = "BERRIES";
    typeCategory[typeCategory["TROPICAL_FRUITS"] = 2] = "TROPICAL_FRUITS";
    typeCategory[typeCategory["DRUPES"] = 3] = "DRUPES";
})(typeCategory || (exports.typeCategory = typeCategory = {}));
const showType = () => {
    (0, Colors_1.yellow)(` 
    ╔══════════════════════════════════════╗
    ║           CATEGORY TYPES             ║
    ╠══════════════════════════════════════╣
    ║  Choose one type !                   ║
    ╠══════════════════════════════════════╣
    ║  1 - Citrus Fruits                   ║
    ║  2 - Berries                         ║
    ║  3 - Tropical Fruits                 ║
    ║  4 - Drupes                          ║
    ╚══════════════════════════════════════╝`);
};
exports.showType = showType;
