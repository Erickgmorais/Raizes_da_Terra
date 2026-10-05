import { Food } from "../Class/Food";
import { Institution } from "../Class/Institution";
import { purple, red, white, yellow } from "./Colors";

export const logger = console.log
export const ask = require('readline-sync');

export const stop = (): void => {
    ask.question('Press ENTER to continue. ');
};

export const readIndex = (message: string, length: number): number => {
    const value = Number(ask.question(message));

    if (Number.isNaN(value) || value < 1 || value > length) {
        throw new Error('Invalid option');
    }
    return value - 1;
}
