"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_console_1 = require("node:console");
const Auxiliares_1 = require("./Auxiliares/Auxiliares");
const Colors_1 = require("./Auxiliares/Colors");
const CreateProducer_1 = require("./Class/CreateProducer");
const Food_1 = require("./Class/Food");
const Institution_1 = require("./Class/Institution");
const Donate_1 = require("./Donate/Donate");
const Enum_1 = require("./Auxiliares/Enum");
const arrayProducer = [];
const arrayFood = [];
const arrayInstitution = [];
let createdProducer;
let interrupt = false;
const maxCharacters = 11;
while (!interrupt) {
    try {
        (0, node_console_1.clear)();
        (0, Colors_1.cyan)(`
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

`);
        const option = Auxiliares_1.ask.question('Choose an option: ');
        switch (option) {
            case '1':
                (0, node_console_1.clear)();
                const name = Auxiliares_1.ask.question('Insert name: ');
                const identify = Auxiliares_1.ask.question('Insert your identify (11 characters): ');
                if (identify.length < maxCharacters || identify.length > 11) {
                    throw new Error(' !! INVALID CHARACTERS !!');
                }
                const quantityProduced = Auxiliares_1.ask.question('Insert your quantity produced food: ');
                createdProducer = new CreateProducer_1.CreateProducer(name, identify, quantityProduced);
                createdProducer.showProducer();
                (0, Colors_1.white)('\nProducer insert sucessfully! ');
                arrayProducer.push(createdProducer);
                (0, Auxiliares_1.stop)();
                break;
            case '2':
                (0, node_console_1.clear)();
                const nameFood = Auxiliares_1.ask.question('Enter the name of the food: ');
                (0, Enum_1.showType)();
                const categoryFood = {
                    '1': Enum_1.typeCategory.GRAINS,
                    '2': Enum_1.typeCategory.VEGETALES,
                    '3': Enum_1.typeCategory.FRUITS,
                    '4': Enum_1.typeCategory.PULSES_OR_LEGUMES,
                    '5': Enum_1.typeCategory.NUTS,
                    '6': Enum_1.typeCategory.OTHERS
                };
                const optionCategory = Auxiliares_1.ask.question('Enter the category number: ');
                if (categoryFood.length < 0 || categoryFood.length > 7) {
                    throw new Error(' !! INVALID CATEGORY !!');
                }
                const quantityFood = Number(Auxiliares_1.ask.question('Enter the quantity kilos: '));
                if (arrayProducer.length < 0) {
                    throw new Error(' !! NO PRODUCER !!');
                }
                arrayProducer.forEach((e, i) => {
                    (0, Colors_1.blue)('\n' + (i + 1) + ' - ' + e.showProducer());
                });
                const chooseProducer = Number(Auxiliares_1.ask.question('Choose an producer: '));
                const foodCreated = new Food_1.Food(nameFood, categoryFood[optionCategory], quantityFood, arrayProducer[chooseProducer]);
                arrayFood.push(foodCreated);
                break;
            case '3':
                (0, node_console_1.clear)();
                const nameInstitution = Auxiliares_1.ask.question('Insert name Institution: ');
                const addresInstitution = Auxiliares_1.ask.question('Insert addres Institution: ');
                const peopleServed = Number(Auxiliares_1.ask.question('Insert people served: '));
                const createInstitution = new Institution_1.Institution(nameInstitution, addresInstitution, peopleServed);
                (0, Colors_1.white)('\Institution insert sucessfully! ');
                arrayInstitution.push(createInstitution);
                (0, Auxiliares_1.stop)();
                break;
            case '4':
                (0, node_console_1.clear)();
                if (arrayProducer.length === 0) {
                    throw new Error(' !! NO PRODUCER REGISTRED !! ');
                }
                arrayProducer.forEach((e, i) => {
                    (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.showProducer());
                });
                (0, Auxiliares_1.stop)();
                break;
            case '5':
                (0, node_console_1.clear)();
                if (arrayFood.length === 0) {
                    throw new Error(' !! NO FOOD REGISTRED !! ');
                }
                arrayFood.forEach((e, i) => {
                    (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.showFood());
                });
                (0, Auxiliares_1.stop)();
                break;
            case '6':
                (0, node_console_1.clear)();
                if (arrayInstitution.length === 0) {
                    throw new Error(' !! NO INSTITUTION REGISTRED !! ');
                }
                arrayInstitution.forEach((e, i) => {
                    (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.showInstitution());
                });
                (0, Auxiliares_1.stop)();
                break;
            case '7':
                (0, node_console_1.clear)();
                if (arrayInstitution.length === 0) {
                    throw new Error(' !! NO INSTITUTION REGISTRED !! ');
                }
                (0, Donate_1.makeDonation)(arrayFood, arrayInstitution);
                (0, Colors_1.white)('\nFood delivered successfully!');
                (0, Auxiliares_1.stop)();
                break;
            case '0':
                (0, node_console_1.clear)();
                (0, Colors_1.white)(`
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
                throw new Error(' !! Invalid option !! ');
        }
    }
    catch (error) {
        if (error instanceof Error) {
            (0, Colors_1.red)(`\n !! ${error.message} !!`);
            Auxiliares_1.ask.question('\nPress ENTER to continue...');
            (0, node_console_1.clear)();
        }
    }
}
/*
* Tenho que fazer o usuário escolher quantos kilos pretende doar.
*/ 
