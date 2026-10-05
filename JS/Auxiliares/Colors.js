"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.green = green;
exports.red = red;
exports.purple = purple;
exports.yellow = yellow;
exports.blue = blue;
exports.cyan = cyan;
exports.white = white;
exports.orange = orange;
const Auxiliares_1 = require("./Auxiliares");
function green(text) {
    (0, Auxiliares_1.logger)(`\x1b[92m${text}\x1b[0m`);
}
function red(text) {
    (0, Auxiliares_1.logger)(`\x1b[91m${text}\x1b[0m`);
}
function purple(text) {
    (0, Auxiliares_1.logger)(`\x1b[35m${text}\x1b[0m`);
}
function yellow(text) {
    (0, Auxiliares_1.logger)(`\x1b[93m${text}\x1b[0m`);
}
function blue(text) {
    (0, Auxiliares_1.logger)(`\x1b[94m${text}\x1b[0m`);
}
function cyan(text) {
    (0, Auxiliares_1.logger)(`\x1b[96m${text}\x1b[0m`);
}
function white(text) {
    (0, Auxiliares_1.logger)(`\x1b[97m${text}\x1b[0m`);
}
function orange(text) {
    (0, Auxiliares_1.logger)(`\x1b[38;5;208m${text}\x1b[0m`);
}
