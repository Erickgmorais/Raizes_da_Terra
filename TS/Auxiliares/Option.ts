import { clear } from "console";
import { CreateProducer } from "../Class/CreateProducer";
import { Food } from "../Class/Food";
import { Institution } from "../Class/Institution";
import { Producer } from "../Class/Producer";
import { ask } from "./Auxiliares";
import { white } from "./Colors";

const arrayProducer: Producer[] = [];
const arrayFood: Food[] = []
const arrayInstitution: Institution[] = [];

let createdProducer: Producer;

export const registerProducer = (): void => {
    clear();

    const name: string = ask.question('Insert name: ');
    const identify: string = ask.question('Insert your identify (document): ');
    const quantityFood: number = ask.question('Insert your quantity produced food: ');

    createdProducer = new CreateProducer(name, identify, quantityFood);
    createdProducer.showProducer();
    white('\nProducer insert sucessfully! ');
    arrayProducer.push(createdProducer); 
    stop();

}