import { clear } from "node:console";
import { ask, readIndex, stop } from "./Auxiliares/Auxiliares";
import { cyan, green, red, white, yellow } from "./Auxiliares/Colors";
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
                registerProducer();
        }
       

//         switch(option) {
//             case '1':
//                 clear();

//                 const name: string = ask.question('Insert name: ');
//                 const identify: string = ask.question('Insert your identify (document): ');
//                 const quantityFood: number = ask.question('Insert your quantity produced food: ');

//                 createdProducer = new CreateProducer(name, identify, quantityFood);
//                 createdProducer.showProducer();
//                 white('\nProducer insert sucessfully! ');
//                 arrayProducer.push(createdProducer);
                
//                 stop();
//                 break;

//             case '2': 
//                 clear();
//                 const nameFood: string = ask.question('Enter the name of the food: ');
//                 showType();
//                 const categoryFood: string = ask.question('Enter the category number: ');
            
//                 switch(categoryFood) {
//                     case '1': 
//                         const quantityKilos: number = Number(ask.question('Enter the quantity kilos'));    

//                         if(arrayProducer.length === 0) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         arrayProducer.forEach((e, i) => {
//                             yellow('\n' + (i + 1) + ' - ' + e.getName());
//                         });

//                         const chooseProducer: number = Number(ask.question('Enter the producer number: '));
                        
//                         if(chooseProducer < 0 || chooseProducer > arrayProducer.length) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         const createFood: Food = new Food(nameFood, typeCategory.CITRUS_FRUITS, quantityKilos,  arrayProducer[chooseProducer]);
//                         white('\nFood insert sucessfully! ');
//                         arrayFood.push(createFood);
//                         stop();
//                         break;
                    
//                     case '2': 
//                         const quantityKilos2: number = Number(ask.question('Enter the quantity kilos: '));    

//                         if(arrayProducer.length === 0) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         arrayProducer.forEach((e, i) => {
//                             yellow('\n' + (i + 1) + ' - ' + e.getName());
//                         });

//                         const chooseProducer2: number = Number(ask.question('Enter the producer number: '));
                        
//                         if(chooseProducer2 < 0 || chooseProducer2 > arrayProducer.length) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         const createFood2: Food = new Food(nameFood, typeCategory.BERRIES, quantityKilos2,  arrayProducer[chooseProducer2]);
//                         white('\nFood insert sucessfully! ');
//                         arrayFood.push(createFood2);
//                         stop();
//                         break;
 
//                     case '3': 
//                         const quantityKilos3: number = Number(ask.question('Enter the quantity kilos'));    

//                         if(arrayProducer.length === 0) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         arrayProducer.forEach((e, i) => {
//                             yellow('\n' + (i + 1) + ' - ' + e.getName());
//                         });

//                         const chooseProducer3: number = Number(ask.question('Enter the producer number: '));
                        
//                         if(chooseProducer3 < 0 || chooseProducer3 > arrayProducer.length) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         const createFood3: Food = new Food(nameFood, typeCategory.TROPICAL_FRUITS, quantityKilos3,  arrayProducer[chooseProducer3]);
//                         white('\nFood insert sucessfully! ');
//                         arrayFood.push(createFood3);
//                         stop();
//                         break;

//                     case '4': 
//                         const quantityKilos4: number = Number(ask.question('Enter the quantity kilos'));    

//                         if(arrayProducer.length === 0) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         arrayProducer.forEach((e, i) => {
//                             yellow('\n' + (i + 1) + ' - ' + e.getName());
//                         });

//                         const chooseProducer4: number = Number(ask.question('Enter the producer number: '));
                        
//                         if(chooseProducer4 < 0 || chooseProducer4 > arrayProducer.length) {
//                             throw new Error(' !! INVALID OPTION !!');
//                         }

//                         const createFood4: Food = new Food(nameFood, typeCategory.DRUPES, quantityKilos4,  arrayProducer[chooseProducer4]);
//                         white('\nFood insert sucessfully! ');
//                         arrayFood.push(createFood4);
//                         stop();
//                         break;
//                 }

//             case '3': 
//                 clear();
//                 const nameInstitution: string = ask.question('Insert name Institution: ');
//                 const addresInstitution: string = ask.question('Insert addres Institution: ');
//                 const peopleServed: number = Number(ask.question('Insert people served: '));
                
//                 const createInstitution: Institution = new Institution(nameInstitution, addresInstitution, peopleServed);
//                 white('\Institution insert sucessfully! ');
//                 arrayInstitution.push(createInstitution);
                
//                 stop();
//                 break;

//             case '4': 
//                 clear();

//                 if (arrayProducer.length === 0) {
//                     throw new Error('No producers registered');
//                 }

//                 arrayProducer.forEach((e, i) => {
//                     yellow(`\n${i + 1} -`);
//                     e.showProducer();
//                 });
                
//                 stop();
//                 break;
            
//             case '5': 
//                 clear();

//                 if (arrayFood.length === 0) {
//                     throw new Error('No food registered');
//                 }

//                 arrayFood.forEach((e, i) => {
//                     yellow(`\n${i + 1} -`);
//                     e.showFood();
//                 });
                
//                 stop();
//                 break;
            
//             case '6': 
//                 clear();

//                 if (arrayInstitution.length === 0) {
//                     throw new Error('No institutions registered');
//                 }

//                 arrayInstitution.forEach((e, i) => {
//                     yellow(`\n${i + 1} -`);
//                     e.showInstitution();
//                 });
//                 stop();
//                 break;

//             case '7': 
//                 clear();

//                 if (arrayInstitution.length === 0) {
//                     throw new Error('No institutions registered');
//                 }
                
//                 makeDonation(arrayFood, arrayInstitution)
//                 white('\nFood delivered successfully!');
                
//                 stop();
//                 break;

//             case '0':
//                 clear();  
//                 white(`
// -------------------------------------------------------------------------------------- 
//             ████  ███  ███ █   █ ████   ███    
//             █ ░░░░█ ░░█  █░░██  █░█░░░█ █ ░░█   
//              ███░░█████░ █░░█░█ █░█░░░█░█░ ░█░  
//               ░░█ █░░░█░░█░░█░░██░█░░ █░█░░ █░░ 
//             ████░░█░░░█░███░█░░ █░████ ░░███ ░░ 
//              ░░░░ ░░░  ░░░░░ ░░  ░░░░░░ ░ ░░░ ░ 
//               ░░░░  ░   ░ ░░░ ░   ░ ░░░░   ░░░ ...
// -------------------------------------------------------------------------------------- 
//                 `);
//                 interrupt = true;
//                 break;

//             default: 
//                 throw new Error(' !! Invalid option !! ')
//         }
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