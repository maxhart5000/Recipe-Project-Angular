import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredent.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() {}

   addIngredient() {
    console.log(this.nameInputRef.nativeElement.value);
    console.log(this.amountInputRef.nativeElement.value);
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.addedIngredient.emit(newIngredient);
  }

}
