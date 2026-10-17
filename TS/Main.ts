import { clear } from "node:console";
import { ask,  stop } from "./Auxiliares/Auxiliares";
import { blue, cyan, green, purple, red, white, yellow } from "./Auxiliares/Colors";
import { CreateProducer } from "./Class/CreateProducer";
import { Food } from "./Class/Food"
import { Institution } from "./Class/Institution";
import { Producer } from "./Class/Producer"
import { showType, typeCategory } from "./Auxiliares/Enum";
import { Registry } from "./Class/Registry";


const arrayProducer: Producer[] = [];
const arrayFood: Food[] = []
const arrayInstitution: Institution[] = [];

const producerTest: CreateProducer = new CreateProducer('Producer Test', '12345678901', 5);
arrayProducer.push(producerTest)
const foodTest: Food = new Food('RICE', typeCategory.GRAINS, 5, 2, arrayProducer[0]);
arrayFood.push(foodTest);
const institutionTest: Institution = new Institution('Institution Test', 'Walter Rosa, 205', 5);
arrayInstitution.push(institutionTest);


let createdProducer: CreateProducer;

let interrupt: boolean = false

//Variavel para max caracters do "Identify"
const maxCharacters: number = 11

clear();
green (`
========================================
      WELCOME TO ROOTS OF THE EARTH
              COOPERATIVE
========================================`);

while(!interrupt) {
    try {
        cyan(`

                MAIN MENU 

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
            //Criação de PRODUTORES
            case '1':
                clear();
                purple(`
███ █   █  ████ █████ ████  █████    ████  ████   ███  ████  █   █  ███  █████ ████    
 █░░██  █░█ ░░░░█░░░░░█░░░█  ░█░░░   █░░░█ █░░░█ █ ░░█ █░░░█ █░  █░█ ░░░ █░░░░░█░░░█   
 █░░█░█ █░░███░░████░░████░░  █░░░░  ████░░████░░█░ ░█░█░░░█░█░░ █░█░ ░░░████░░████░░  
 █░░█░░██░░ ░░█ █░░░░ █░░█░ ░ █░░    █░░░░ █░░█░ █░░ █░█░░ █░█░░ █░█░░   █░░░░ █░░█░ ░ 
███░█░░ █░████░░█████░█░░░█░  █░░    █░░░░░█░░░█░ ███ ░████ ░░███ ░░███  █████░█░░░█░  
 ░░░ ░░  ░░░░░░ ░░░░░░ ░░  ░   ░░     ░░    ░░  ░  ░░░ ░░░░░ ░ ░░░ ░ ░░░  ░░░░░ ░░  ░  
  ░░░ ░   ░ ░░░░  ░░░░░ ░   ░   ░      ░     ░   ░  ░░░  ░░░░   ░░░   ░░░  ░░░░░ ░   ░ `)

                const name: string = ask.question('Insert name: ');
                const identify: string = ask.question('Insert your identify (11 characters): ');
                
                //Verificação de caracteres da identificação
                if(identify.length < maxCharacters || identify.length > 11) {
                    throw new Error(' !! INVALID CHARACTERS !!');
                }

                //Verificação de identificação unica(lembro que fizemos essa verificação em um trabalho de JS)
                for(let i = 0; i < arrayProducer.length; i++){
                    if(identify === arrayProducer[i].getIdentify()) {
                        throw new Error(' !! IDENTIFY EXISTING !! ');
                    }
                }
                const quantityProduced: number = ask.question('Insert your quantity produced food: ');

                if(quantityProduced < 0 || isNaN(Number(quantityProduced))) {
                    throw new Error(' !! INVALID OPTION !!');
                }

                createdProducer = new CreateProducer(name, identify, quantityProduced);
                
                white('\nProducer insert sucessfully! ');
                arrayProducer.push(createdProducer);
                
                stop();
                clear();
                break;

            //Criação de FOODS
            case '2': 
            clear();
            purple(`
███ █   █  ████ █████ ████  █████    █████  ███   ███  ████    
 █░░██  █░█ ░░░░█░░░░░█░░░█  ░█░░░   █░░░░░█ ░░█ █ ░░█ █░░░█   
 █░░█░█ █░░███░░████░░████░░  █░░░░  ████░░█░ ░█░█░ ░█░█░░░█░  
 █░░█░░██░░ ░░█ █░░░░ █░░█░ ░ █░░    █░░░░ █░░ █░█░░ █░█░░ █░░ 
███░█░░ █░████░░█████░█░░░█░  █░░    █░░░░░ ███ ░░███ ░████ ░░ 
 ░░░ ░░  ░░░░░░ ░░░░░░ ░░  ░   ░░     ░░     ░░░ ░ ░░░ ░░░░░ ░ 
  ░░░ ░   ░ ░░░░  ░░░░░ ░   ░   ░      ░      ░░░   ░░░  ░░░░   `)

                //Verifica se tem produtor
                if(arrayProducer.length < 0) {
                    throw new Error(' !! NO PRODUCER !!');
                }
                const nameFood: string = ask.question('Enter the name of the food: ').toUpperCase();
                showType();

                //Record indicando que a chave é number e o valor é do tipo typeCategory
                const categoryFood: Record<number, typeCategory> = {
                    1: typeCategory.GRAINS,
                    2: typeCategory.VEGETALES,
                    3: typeCategory.FRUITS,
                    4: typeCategory.PULSES_OR_LEGUMES,
                    5: typeCategory.NUTS,
                    6: typeCategory.OTHERS    
                               
                }
                const optionCategory: number = ask.question('Enter the category number: ');

                //Verificação para a opcao de categoria
                if(optionCategory <= 0 || optionCategory > 6 || isNaN(Number(optionCategory))) {
                    throw new Error(' !! INVALID CATEGORY !!');
                } 
                const quantityFood: number = Number(ask.question('Enter the quantity kilos: '));
                
                //Não permite quantidade negativa
                if(quantityFood < 0 || isNaN(Number(quantityFood))) {
                    throw new Error(' !! INVALID QUANTITY !!');
                }
                const currentStock: number = Number(ask.question('Enter the current stock: '));

                //Não permite estoque negativo
                if(currentStock < 0 || isNaN(Number(currentStock))) {
                    throw new Error(' !! INVALID STOCK !!');
                }
                const showProducer = new Registry(arrayProducer);
                showProducer.list();

                const chooseProducer: number = Number(ask.question('Choose an producer: '));
                if(chooseProducer <= 0 || chooseProducer > arrayProducer.length || isNaN(Number(chooseProducer))) {
                    throw new Error(' !! INVALID PRODUCER !! ');
                }

                //Instancia a minha classe Food
                const foodCreated: Food = new Food(nameFood, categoryFood[optionCategory], quantityFood, currentStock ,arrayProducer[chooseProducer]);
                arrayFood.push(foodCreated);
                
                white('\nFood insert sucessfully! ');
                stop();
                clear();
                break;

            //Criação da INSTITUIÇÃO
            case '3': 
                clear();
                purple(`
███ █   █  ████ █████ ████  █████    ███ █   █  ████ █████ ███ █████ █   █ █████ ███  ███  █   █   
 █░░██  █░█ ░░░░█░░░░░█░░░█  ░█░░░    █░░██  █░█ ░░░░ ░█░░░ █░░ ░█░░░█░  █░ ░█░░░ █░░█ ░░█ ██  █░  
 █░░█░█ █░░███░░████░░████░░  █░░░░   █░░█░█ █░░███░░░ █░░░░█░░░ █░░░█░░ █░░ █░░░░█░░█░ ░█░█░█ █░░ 
 █░░█░░██░░ ░░█ █░░░░ █░░█░ ░ █░░     █░░█░░██░░ ░░█   █░░  █░░  █░░ █░░ █░░ █░░  █░░█░░ █░█░░██░░ 
███░█░░ █░████░░█████░█░░░█░  █░░    ███░█░░ █░████░░  █░░ ███░  █░░  ███ ░░ █░░ ███░ ███ ░█░░ █░░ 
 ░░░ ░░  ░░░░░░ ░░░░░░ ░░  ░   ░░     ░░░ ░░  ░░░░░░ ░  ░░  ░░░   ░░   ░░░ ░  ░░  ░░░  ░░░ ░░░  ░░ 
  ░░░ ░   ░ ░░░░  ░░░░░ ░   ░   ░      ░░░ ░   ░ ░░░░    ░   ░░░   ░    ░░░    ░   ░░░  ░░░  ░   ░ `)
                const nameInstitution: string = ask.question('Insert name Institution: ');
                const addresInstitution: string = ask.question('Insert addres Institution: ');
                const inputPeopleServed: string = ask.question('Insert people served: ');

                if (inputPeopleServed.trim() === '') {
                    throw new Error('!! INPUT CANNOT BE EMPTY !!');
                }

                const peopleServed: number = Number(inputPeopleServed);

                if (isNaN(Number(peopleServed)) || peopleServed < 0) {
                    throw new Error('!! INVALID NUMBER !!');
                }
                
                const createInstitution: Institution = new Institution(nameInstitution, addresInstitution, peopleServed);
                arrayInstitution.push(createInstitution);

                white('\nInstitution insert sucessfully! ');
                stop();
                clear();
                break;

            //Listar PRODUTORES
            case '4': 
                clear();

                //Verifica se existe Produtores
                if (arrayProducer.length === 0) {
                    throw new Error(' !! NO PRODUCER REGISTRED !! ');
                }
                const producerRegistry = new Registry<Producer>(arrayProducer);
                producerRegistry.list()
                
                stop();
                clear();
                break;
            
            //Listar COMIDAS
            case '5': 
                clear();

                //Verifica se existe Foods
                if (arrayFood.length === 0) {
                    throw new Error(' !! NO FOOD REGISTRED !! ');
                }
                
                const foodRegistry = new Registry<Food>(arrayFood);
                foodRegistry.list();

                stop();
                clear();
                break;
            
            //Listar INSTITUIÇÕES
            case '6': 
                clear();

                //Verifica se existe instituições
                if (arrayInstitution.length === 0) {
                    throw new Error(' !! NO INSTITUTION REGISTRED !! ');
                }
                                
                const institutionRegistry = new Registry<Institution>(arrayInstitution);
                institutionRegistry.list();

                stop();
                clear();
                break;

            //Realizar um DONATE
            case '7': 
                clear();

                //Verifica se existe instituições
                if (arrayInstitution.length === 0) {
                    throw new Error(' !! NO INSTITUTION REGISTRED !! ');
                }

                purple(`
        █   █ █████ █   █    ████   ███  █   █  ███  █████ ███  ███  █   █   
        ██  █░█░░░░░█░  █░   █░░░█ █ ░░█ ██  █░█ ░░█  ░█░░░ █░░█ ░░█ ██  █░  
        █░█ █░████░░█░█ █░░  █░░░█░█░ ░█░█░█ █░█████░  █░░░░█░░█░ ░█░█░█ █░░ 
        █░░██░█░░░░ ██░██░░  █░░ █░█░░ █░█░░██░█░░░█░░ █░░  █░░█░░ █░█░░██░░ 
        █░░ █░█████░█░░ █░░  ████ ░░███ ░█░░ █░█░░░█░░ █░░ ███░ ███ ░█░░ █░░ 
        ░░  ░░░░░░░ ░░░ ░░   ░░░░ ░ ░░░ ░░░  ░░░░  ░░  ░░  ░░░  ░░░ ░░░  ░░ 
        ░   ░ ░░░░░ ░   ░    ░░░░   ░░░  ░   ░ ░   ░   ░   ░░░  ░░░  ░   ░ `);

                    arrayFood.forEach((e, i )=> {
                    green("\n" + (i + 1) + e.showList());
                });
                const chooseFood: number = Number(ask.question('Choose for donation: ')) - 1;

                const optionUser: boolean = chooseFood < 0 || chooseFood > (arrayFood.length - 1) || isNaN(Number(chooseFood))//Buscado na IA para verificar se é um NUMBER

                if (optionUser) {
                    throw new Error(' !! INVALID OPTION !! ');
                }

                const chooseUser = arrayFood[chooseFood]
                chooseUser.donate(chooseUser, arrayInstitution);
                
                white('\nFood delivered successfully!');
                stop();
                clear();
                break;

            //Sair do programa
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
                throw new Error(' !! INVALID OPTION !! ')
        }
    } catch (error) {
        if (error instanceof Error) {
            red(`\n !! ${error.message} !!`);

        stop();
        clear();
         }
     }
 }
