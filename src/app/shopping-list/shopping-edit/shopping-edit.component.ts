import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredent.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
 // @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingService) {}

   addIngredient() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    // this.addedIngredient.emit(newIngredient);
    this.shoppingService.addIngredient(newIngredient);
  }

}
