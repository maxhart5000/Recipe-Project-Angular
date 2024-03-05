import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredent.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Lasagna","Grandma's home cooked Lasagna", "https://images.pixexid.com/delicious-lasagna-y3fwjqie.jpeg",[new Ingredient("Beef",3), new Ingredient("Cheese",1)]),
    new Recipe("Chicken Alfredo","Creamy Chicken Alfredo", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Feast_of_the_Seven_Fishes_5.jpg",[new Ingredient("Creamy Cheese",2), new Ingredient("Chicken",1)]),
    new Recipe("Spaghetti","Classic Spaghetti", "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",[new Ingredient("Pasta",2), new Ingredient("Tomatao Bolegnase",1)]),
    new Recipe("Tacos","Taco Tuesday", "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",[new Ingredient("Taco Shell",4), new Ingredient("Beef",1)])
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
    
  }
}
