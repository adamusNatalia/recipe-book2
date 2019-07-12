import {Component, ContentChild, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() recipesNavigation = new EventEmitter<{navigation: boolean}>();
  @Output() shoppingListNavigation = new EventEmitter<{navigation: boolean}>();
  @Output() headerEmitter = new EventEmitter<{recipesNav: boolean, shoppingListNav: boolean}>();
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  onRecipesClick() {
    // // this.recipesNavigation.emit( {
    // //   navigation: true
    // // });
    // this.shoppingListNavigation.emit( {
    //   navigation: false
    // });
    this.headerEmitter.emit( {
      recipesNav: true,
      shoppingListNav: false
    });
  }
  onShoppingListClick() {
    // this.recipesNavigation.emit( {
    //   navigation: false
    // });
    // // this.shoppingListNavigation.emit( {
    // //   navigation: true
    // // });
    this.headerEmitter.emit( {
      recipesNav: false,
      shoppingListNav: true
    });
  }


}
