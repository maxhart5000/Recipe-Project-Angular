import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {

  recipeSelected: Recipe;

  // onRecipeSelected(recipe: Recipe) {
  //   console.log('Recipe selected: ' + recipe.name);
  //   this.recipeSelected = recipe;
  // }

  constructor(private recipeService: RecipeService) {
    
  }

  ngOnInit(): void {
   this.recipeService.recipeSelected.subscribe(
    (recipe: Recipe) => {
      this.recipeSelected = recipe;
    });
  }
}
