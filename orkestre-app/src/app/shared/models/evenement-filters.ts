import { EvenementCategoryEnum } from "./evenementCategoryEnum";

export interface EvenementFilters {
    date:string;
    priceMax:number;
    category:EvenementCategoryEnum
}
