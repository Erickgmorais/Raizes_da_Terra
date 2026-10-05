import { logger } from "../Auxiliares/Auxiliares";
import { green, white } from "../Auxiliares/Colors";

export class Registry<T extends { getName(): string, getType(): string }> {
    private items: T[] = []

    constructor(items: T[]) {
        this.items = items
    }

    public add(items: T): void {
        this.items.push(items)
    }

    public list(): void {
        this.items.forEach((e, i)=> {
            green('\n' + (i + 1) + ' - ' + e.getType() + ' - ' + e.getName());
        });
    }

    public find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
    
}