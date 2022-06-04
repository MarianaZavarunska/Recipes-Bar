import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IRecipe} from "../../../../models";
import {RecipesService} from "../../services";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe:IRecipe;

  constructor(private  activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {

      if(history.state.data) this.recipe = history.state.data;

      else this.recipesService.getRecipeById(value['id']).subscribe(({data}) => this.recipe = data.recipes[0]);
    })

  }

}
