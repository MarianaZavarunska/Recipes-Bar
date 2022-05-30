import { Component, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/models';
import {RecipesService} from "../../services";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: IRecipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe( ({data})=> this.recipes = data.recipes);
  }

}
