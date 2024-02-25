import { Component, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  @Output() recipeSelected: Recipe;

  onRecipeSelected(recipe: Recipe) {
    console.log('Recipe selected: ' + recipe.name);
    this.recipeSelected = recipe;
  }

}
