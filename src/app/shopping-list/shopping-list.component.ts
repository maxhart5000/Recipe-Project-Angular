import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredent.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 7),
    new Ingredient('Onions', 3)
  ];

  newIngredientAdded(ingredient: Ingredient) {
    console.log("new ingredient added");
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }
}
