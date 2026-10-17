import { green } from "../Auxiliares/Colors";

export class Registry<T extends { getName(): string, showList(): void }> {
    private items: T[] = []

    constructor(items: T[]) {
        this.items = items
    }

    public add(items: T): void {
        this.items.push(items)
    }

    public list(): void {
        this.items.forEach((e, i)=> {
            green('\n' + (i + 1) + ' - ' + e.showList());
        });
    }

    public find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
    
}