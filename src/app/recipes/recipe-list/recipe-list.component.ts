import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeIt = new EventEmitter<{Recipe}>();
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is a first recipe', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*'),
    new Recipe('Second Recipe', 'This is a second recipe', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0470.jpg?itok=PdSpu3Af')
  ];
  constructor() { }

  onRecipeItemClick(recipeClicked) {
    this.recipeIt.emit(
      recipeClicked
    );
  }

  ngOnInit() {
  }

}
