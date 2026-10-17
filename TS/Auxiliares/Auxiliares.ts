export const logger = console.log
export const ask = require('readline-sync');

export const stop = (): void => {
    ask.question('Press ENTER to continue. ');
};

