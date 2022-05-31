import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { IRecipe } from 'src/app/models';
import { DataService } from 'src/app/services';
import {RecipesService} from "../../services";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements  OnInit{
  searchRecipe: { recipe: string};
  @Input()
  recipes: IRecipe[];



  constructor(private recipeService: RecipesService, private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.searchStorage.subscribe(value => {
      this.searchRecipe = value;
      this.recipeService.getRecipes(this.searchRecipe.recipe == ''?'pizza': this.searchRecipe.recipe ).subscribe( ({data})=> this.recipes = data.recipes);
    })
  }


}
