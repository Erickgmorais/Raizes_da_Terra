import { logger } from "./Auxiliares";

export function green(text: string): void {
    logger(`\x1b[92m${text}\x1b[0m`);
}

export function red(text: string): void {
    logger(`\x1b[91m${text}\x1b[0m`);
}  

export function purple(text: string): void {
    logger(`\x1b[35m${text}\x1b[0m`);
} 

export function yellow(text: string): void {
    logger(`\x1b[93m${text}\x1b[0m`);
}

export function blue(text: string): void {
    logger(`\x1b[94m${text}\x1b[0m`);
}

export function cyan(text: string): void {
    logger(`\x1b[96m${text}\x1b[0m`);
}

export function white(text: string): void {
    logger(`\x1b[97m${text}\x1b[0m`);
}

export function orange(text: string): void {
    logger(`\x1b[38;5;208m${text}\x1b[0m`);
}