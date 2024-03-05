import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
  }

  viewRecipe() {
    // this.recipeSelected.emit(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log('Recipe selected: ' + this.recipe.name);
  }
}
