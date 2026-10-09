"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = exports.ask = exports.logger = void 0;
exports.logger = console.log;
exports.ask = require('readline-sync');
const stop = () => {
    exports.ask.question('Press ENTER to continue. ');
};
exports.stop = stop;
