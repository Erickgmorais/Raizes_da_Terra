import { blue } from "../Auxiliares/Colors";
import { Producer } from "./Producer";

export class CreateProducer extends Producer {
    constructor(name: string, identify: string, producedFoods: number) {
        super(name, identify, producedFoods)
    }

    public showProducer(): void {
        blue(`
========================================
              PRODUCER
========================================

  NAME   : ${this.name}
  ID     : ${this.identify}
  FOODS  : ${this.producedFoods}

========================================
    `);
    }
}