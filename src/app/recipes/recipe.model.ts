import { Ingredient } from '../shared/ingredent.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imageSrc: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imageSrc;
        this.ingredients = ingredients;
    } 
}