import { Food } from "../Class/Food";
import { Institution } from "../Class/Institution";
import { purple, red, white, yellow } from "./Colors";

export const logger = console.log
export const ask = require('readline-sync');

export const stop = (): void => {
    ask.question('Press ENTER to continue. ');
};

