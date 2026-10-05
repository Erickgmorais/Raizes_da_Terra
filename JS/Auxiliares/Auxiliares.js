"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readIndex = exports.stop = exports.ask = exports.logger = void 0;
exports.logger = console.log;
exports.ask = require('readline-sync');
const stop = () => {
    exports.ask.question('Press ENTER to continue. ');
};
exports.stop = stop;
const readIndex = (message, length) => {
    const value = Number(exports.ask.question(message));
    if (Number.isNaN(value) || value < 1 || value > length) {
        throw new Error('Invalid option');
    }
    return value - 1;
};
exports.readIndex = readIndex;
