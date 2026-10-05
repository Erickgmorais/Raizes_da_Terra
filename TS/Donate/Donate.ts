import { ask } from "../Auxiliares/Auxiliares";
import { purple, red, yellow } from "../Auxiliares/Colors";
import { Food } from "../Class/Food";
import { Institution } from "../Class/Institution";
import { stop } from "../Auxiliares/Auxiliares";

let interrupt: boolean = false

export const makeDonation = (food: Food[], instituion: Institution[]): void => {
    purple('!! NEW DONATION !!');
    
    while(!interrupt) {
        instituion.forEach((e, i) => {
            yellow('\n' + (i + 1) + ' - ' + e.showInstitution()); 
        });

        const chooseInstitution: number = Number(ask.question('Choose the institution: ')) - 1;
        
        if(chooseInstitution < 0 || chooseInstitution > instituion.length) {
            red('Invalid option! ');
            stop();
            continue;
        }
        stop();
        instituion[chooseInstitution].receiveFood(food);
        return;

    }

}