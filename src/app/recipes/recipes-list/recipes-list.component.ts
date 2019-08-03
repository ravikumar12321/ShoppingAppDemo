import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    recipes:Recipe[] = [
      new Recipe('A new Recipe','This is chicken Recipe',
      'https://recipes.timesofindia.com/thumb/54673639.cms?imgsize=497063&width=800&height=800'),
      new Recipe('A new Recipe','This is chicken Recipe',
      'https://recipes.timesofindia.com/thumb/54673639.cms?imgsize=497063&width=800&height=800')
 
    ];

  constructor() { }

  ngOnInit() {
  }

}
