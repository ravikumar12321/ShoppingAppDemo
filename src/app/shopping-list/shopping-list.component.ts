import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    Ingredients:Ingredient[] = [
      new Ingredient("apples",5),
      new Ingredient("Tomatos",10)
    ];

  constructor() { }

  ngOnInit() {
  }

}
