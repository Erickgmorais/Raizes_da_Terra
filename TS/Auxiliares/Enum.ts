import { yellow } from "./Colors"

export enum typeCategory {
    CITRUS_FRUITS,
    BERRIES,
    TROPICAL_FRUITS,
    DRUPES
}

export const showType = (): void => {
    yellow(` 
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
}