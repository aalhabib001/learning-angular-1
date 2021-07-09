import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'The is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Borsch-A-Simple-Recipe-Cook-At-Home-Food-4260907.jpg'),

    new Recipe('A Test Recipe', 'The is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTku-sKyGMXazs_FUR65tQsWpQ1O1c23H7ukg&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
