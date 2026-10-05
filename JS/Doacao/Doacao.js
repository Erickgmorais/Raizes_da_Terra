"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDonation = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Colors_1 = require("../Auxiliares/Colors");
let interrupt = false;
const makeDonation = (food, instituion) => {
    (0, Colors_1.purple)('!! NEW DONATION !!');
    while (!interrupt) {
        instituion.forEach((e, i) => {
            (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.showInstitution());
        });
        const chooseInstitution = Number(Auxiliares_1.ask.question('Choose the institution: ')) - 1;
        if (chooseInstitution < 0 || chooseInstitution > instituion.length) {
            (0, Colors_1.red)('Invalid option! ');
            stop();
            continue;
        }
        stop();
        instituion[chooseInstitution].receiveFood(food);
    }
};
exports.makeDonation = makeDonation;
