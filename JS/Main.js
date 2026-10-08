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
                const identify = Auxiliares_1.ask.question('Insert your identify (document): ');
                const quantityFood = Auxiliares_1.ask.question('Insert your quantity produced food: ');
                createdProducer = new CreateProducer_1.CreateProducer(name, identify, quantityFood);
                createdProducer.showProducer();
                (0, Colors_1.white)('\nProducer insert sucessfully! ');
                arrayProducer.push(createdProducer);
                (0, Auxiliares_1.stop)();
                break;
            case '2':
                (0, node_console_1.clear)();
                const nameFood = Auxiliares_1.ask.question('Enter the name of the food: ');
                (0, Enum_1.showType)();
                const categoryFood = Auxiliares_1.ask.question('Enter the category number: ');
                switch (categoryFood) {
                    case '1':
                        const quantityKilos = Number(Auxiliares_1.ask.question('Enter the quantity kilos'));
                        arrayProducer.forEach((e, i) => {
                            (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.getName());
                        });
                        const chooseProducer = Number(Auxiliares_1.ask.question('Enter the producer number: '));
                        if (chooseProducer < 0 || chooseProducer > arrayProducer.length) {
                            throw new Error(' !! INVALID OPTION !!');
                        }
                        const createFood = new Food_1.Food(nameFood, Enum_1.typeCategory.CITRUS_FRUITS, quantityKilos, arrayProducer[chooseProducer]);
                        (0, Colors_1.white)('\nFood insert sucessfully! ');
                        arrayFood.push(createFood);
                        (0, Auxiliares_1.stop)();
                        break;
                    case '2':
                        const quantityKilos2 = Number(Auxiliares_1.ask.question('Enter the quantity kilos'));
                        if (arrayProducer.length === 0) {
                            throw new Error(' !! INVALID OPTION !!');
                        }
                        arrayProducer.forEach((e, i) => {
                            (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.getName());
                        });
                        const chooseProducer2 = Number(Auxiliares_1.ask.question('Enter the producer number: '));
                        if (chooseProducer2 < 0 || chooseProducer2 > arrayProducer.length) {
                            throw new Error(' !! INVALID OPTION !!');
                        }
                        const createFood2 = new Food_1.Food(nameFood, Enum_1.typeCategory.BERRIES, quantityKilos2, arrayProducer[chooseProducer2]);
                        (0, Colors_1.white)('\nFood insert sucessfully! ');
                        arrayFood.push(createFood2);
                        (0, Auxiliares_1.stop)();
                        break;
                    case '3':
                        const quantityKilos3 = Number(Auxiliares_1.ask.question('Enter the quantity kilos'));
                        arrayProducer.forEach((e, i) => {
                            (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.getName());
                        });
                        const chooseProducer3 = Number(Auxiliares_1.ask.question('Enter the producer number: '));
                        if (chooseProducer3 < 0 || chooseProducer3 > arrayProducer.length) {
                            throw new Error(' !! INVALID OPTION !!');
                        }
                        const createFood3 = new Food_1.Food(nameFood, Enum_1.typeCategory.TROPICAL_FRUITS, quantityKilos3, arrayProducer[chooseProducer3]);
                        (0, Colors_1.white)('\nFood insert sucessfully! ');
                        arrayFood.push(createFood3);
                        (0, Auxiliares_1.stop)();
                        break;
                    case '4':
                        const quantityKilos4 = Number(Auxiliares_1.ask.question('Enter the quantity kilos'));
                        arrayProducer.forEach((e, i) => {
                            (0, Colors_1.yellow)('\n' + (i + 1) + ' - ' + e.getName());
                        });
                        const chooseProducer4 = Number(Auxiliares_1.ask.question('Enter the producer number: '));
                        if (chooseProducer4 < 0 || chooseProducer4 > arrayProducer.length) {
                            throw new Error(' !! INVALID OPTION !!');
                        }
                        const createFood4 = new Food_1.Food(nameFood, Enum_1.typeCategory.DRUPES, quantityKilos4, arrayProducer[chooseProducer4]);
                        (0, Colors_1.white)('\nFood insert sucessfully! ');
                        arrayFood.push(createFood4);
                        (0, Auxiliares_1.stop)();
                        break;
                }
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
                    throw new Error('No producers registered');
                }
                arrayProducer.forEach((e, i) => {
                    (0, Colors_1.yellow)(`\n${i + 1} -`);
                    e.showProducer();
                });
                (0, Auxiliares_1.stop)();
                break;
            case '5':
                (0, node_console_1.clear)();
                if (arrayFood.length === 0) {
                    throw new Error('No food registered');
                }
                arrayFood.forEach((e, i) => {
                    (0, Colors_1.yellow)(`\n${i + 1} -`);
                    e.showFood();
                });
                (0, Auxiliares_1.stop)();
                break;
            case '6':
                (0, node_console_1.clear)();
                if (arrayInstitution.length === 0) {
                    throw new Error('No institutions registered');
                }
                arrayInstitution.forEach((e, i) => {
                    (0, Colors_1.yellow)(`\n${i + 1} -`);
                    e.showInstitution();
                });
                (0, Auxiliares_1.stop)();
                break;
            case '7':
                (0, node_console_1.clear)();
                if (arrayInstitution.length === 0) {
                    throw new Error('No institutions registered');
                }
                (0, Donate_1.makeDonation)(arrayFood, arrayInstitution);
                (0, Colors_1.white)('\nFood delivered successfully!');
                (0, Auxiliares_1.stop)();
                break;
            case '0':
                (0, node_console_1.clear)();
                (0, Colors_1.white)(`
-------------------------------------------------------------------------------------- 
            ████  ███  ███ █   █ ████   ███    
            █ ░░░░█ ░░█  █░░██  █░█░░░█ █ ░░█   
             ███░░█████░ █░░█░█ █░█░░░█░█░ ░█░  
              ░░█ █░░░█░░█░░█░░██░█░░ █░█░░ █░░ 
            ████░░█░░░█░███░█░░ █░████ ░░███ ░░ 
             ░░░░ ░░░  ░░░░░ ░░  ░░░░░░ ░ ░░░ ░ 
              ░░░░  ░   ░ ░░░ ░   ░ ░░░░   ░░░ ...
-------------------------------------------------------------------------------------- 
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
