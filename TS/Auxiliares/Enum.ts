import { yellow } from "./Colors"

export enum typeCategory {
    GRAINS,
    VEGETALES,
    FRUITS,
    PULSES_OR_LEGUMES,
    NUTS,
    OTHERS

}

export const showType = (): void => {
    yellow(` 
╔══════════════════════════════════════╗
║           CATEGORY TYPES             ║
╠══════════════════════════════════════╣
║  Choose one type !                   ║
╠══════════════════════════════════════╣
║  1 - GRAINS                          ║
║  2 - VEGETABLES                      ║
║  3 - FRUITS                          ║
║  4 - PULSE/LEGUMES                   ║
║  5 - NUTS                            ║
║  6 - OTHERS                          ║
╚══════════════════════════════════════╝`);
}