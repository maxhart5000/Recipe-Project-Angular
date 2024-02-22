import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("Lasagna","Grandma's home cooked Lasagna", "https://images.pixexid.com/delicious-lasagna-y3fwjqie.jpeg"),
    new Recipe("Chicken Alfredo","Creamy Chicken Alfredo", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Feast_of_the_Seven_Fishes_5.jpg"),
    new Recipe("Spaghetti","Classic Spaghetti", "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg")
  ];
  
  constructor() {

  }
  ngOnInit(): void {
    
  }
}
