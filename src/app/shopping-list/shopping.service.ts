import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredent.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 7),
    new Ingredient('Onions', 3)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    console.log('Ingredient added: ' + ingredient.name);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
    console.log('Ingredients added: ' + ingredients);

  }
}
