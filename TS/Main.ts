import { clear } from "node:console";
import { ask,  stop } from "./Auxiliares/Auxiliares";
import { cyan, red, white, yellow } from "./Auxiliares/Colors";
import { CreateProducer } from "./Class/CreateProducer";
import { Food } from "./Class/Food"
import { Institution } from "./Class/Institution";
import { Producer } from "./Class/Producer"
import { makeDonation } from "./Donate/Donate";
import { showType, typeCategory } from "./Auxiliares/Enum";
import { registerProducer } from "./Auxiliares/Option";

const arrayProducer: Producer[] = [];
const arrayFood: Food[] = []
const arrayInstitution: Institution[] = [];

let createdProducer: CreateProducer;

let interrupt: boolean = false
const maxCharacters: number = 11

while(!interrupt) {
    try {
        clear();
        cyan(`
========================================
       RAÍZES DA TERRA COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit

`)

        const option: string = ask.question('Choose an option: ');
       
        switch(option) {
            case '1':
                clear();
                const name: string = ask.question('Insert name: ');
                const identify: string = ask.question('Insert your identify (11 characters): ');
                if(identify.length < maxCharacters || identify.length > 11) {
                    throw new Error(' !! INVALID CHARACTERS !!');
                }
                const quantityFood: number = ask.question('Insert your quantity produced food: ');

                createdProducer = new CreateProducer(name, identify, quantityFood);
                createdProducer.showProducer();
                white('\nProducer insert sucessfully! ');
                arrayProducer.push(createdProducer);
                
                stop();
                break;

            case '2': 
                clear();
                const nameFood: string = ask.question('Enter the name of the food: ');
                showType();
                const category: Record<string, typeCategory> = {
                    '1': typeCategory.GRAINS,
                    '2': typeCategory.VEGETALES,
                    '3': typeCategory.FRUITS,
                    '4': typeCategory.PULSES_OR_LEGUMES,
                    '5': typeCategory.NUTS,
                    '6': typeCategory.OTHERS                   
                }
                const categoryFood: string = ask.question('Enter the category number: ');

                if(categoryFood.length < 0 || categoryFood.length > 7) {
                    
                } 
                  

            case '3': 
                clear();
                const nameInstitution: string = ask.question('Insert name Institution: ');
                const addresInstitution: string = ask.question('Insert addres Institution: ');
                const peopleServed: number = Number(ask.question('Insert people served: '));
                
                const createInstitution: Institution = new Institution(nameInstitution, addresInstitution, peopleServed);
                white('\Institution insert sucessfully! ');
                arrayInstitution.push(createInstitution);
                
                stop();
                break;

            case '4': 
                clear();

                if (arrayProducer.length === 0) {
                    throw new Error(' NO PRODUCER REGISTRED ');
                }

                arrayProducer.forEach((e, i) => {
                    yellow(`\n${i + 1} -`);
                    e.showProducer();
                });
                
                stop();
                break;
            
            case '5': 
                clear();

                if (arrayFood.length === 0) {
                    throw new Error(' NO FOOD REGISTRED ');
                }

                arrayFood.forEach((e, i) => {
                    yellow(`\n${i + 1} -`);
                    e.showFood();
                });
                
                stop();
                break;
            
            case '6': 
                clear();

                if (arrayInstitution.length === 0) {
                    throw new Error(' NO INSTITUTION REGISTRED ');
                }

                arrayInstitution.forEach((e, i) => {
                    yellow(`\n${i + 1} -`);
                    e.showInstitution();
                });
                stop();
                break;

            case '7': 
                clear();

                if (arrayInstitution.length === 0) {
                    throw new Error(' NO INSTITUTION REGISTRED ');
                }
                
                makeDonation(arrayFood, arrayInstitution)
                white('\nFood delivered successfully!');
                
                stop();
                break;

            case '0':
                clear();  
                white(`
                █████ █   █ ███ █████   
                █░░░░░ █ █ ░ █░░ ░█░░░  
                ████░░░ █ ░ ░█░░░ █░░░░ 
                █░░░░  █ █ ░ █░░  █░░   
                █████░█ ░ █ ███░  █░░   
                 ░░░░░ ░ ░ ░ ░░░   ░░   
                  ░░░░░ ░   ░ ░░░   ░ ...
                `);
                interrupt = true;
                break;

            default: 
                throw new Error(' !! Invalid option !! ')
        }
    } catch (error) {
        if (error instanceof Error) {
            red(`\n !! ${error.message} !!`);

        ask.question('\nPress ENTER to continue...');
        clear();
         }
     }
 }



/*
* Tenho que fazer o usuário escolher quantos kilos pretende doar.
*/