import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipe-book';
  displayRecipes = true;
  displayShoppingList = false;

  onRegistrationClick(data: {navigation: boolean}) {
    this.displayRecipes = data.navigation;
  }

  onShoppingListClick(data: {navigation: boolean}) {
    this.displayShoppingList = data.navigation;
  }

  onNavigationClick(data: {recipesNav: boolean, shoppingListNav: boolean}) {
    this.displayRecipes = data.recipesNav;
    this.displayShoppingList = data.shoppingListNav;
  }
}
