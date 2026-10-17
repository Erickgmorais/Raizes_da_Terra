import { Food } from "../Class/Food";
import { Institution } from "../Class/Institution";

export interface Donatable {
    donate(food: Food, instituion: Institution[]) : void
}