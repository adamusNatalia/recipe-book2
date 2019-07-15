import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';

@Component({
  selector: 'app-shiopping-edit',
  templateUrl: './shiopping-edit.component.html',
  styleUrls: ['./shiopping-edit.component.css']
})
export class ShioppingEditComponent implements OnInit {

  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput;
  constructor() { }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientCreated.emit(newIngredient);
  }

  ngOnInit() {
  }

}
