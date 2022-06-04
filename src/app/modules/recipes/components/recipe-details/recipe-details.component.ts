import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { fraction, number } from 'mathjs';

import {IIngredient, IRecipe} from "../../../../models";
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
      console.log(value);
      this.recipesService.getRecipeById(value['id']).subscribe(({data}) => {
        this.recipe = data.recipe;
        this.recipe.ingredients.forEach(el => {
         this._convertNumberToFraction(el);
        })
      });
    })

  }

  decrease():void {
    if(this.recipe.servings > 1) {

      this.recipe.ingredients.forEach( (item) => {
        item.quantity = item.quantity / this.recipe.servings * (this.recipe.servings - 1);
        this._convertNumberToFraction(item)
      })
      this.recipe.servings--;
    }
  }

  increase():void {

    this.recipe.ingredients.forEach( (item) => {
      item.quantity = item.quantity / this.recipe.servings * (this.recipe.servings + 1);
      this._convertNumberToFraction(item)
    })
    this.recipe.servings++;

  }

  // TODO: Fix 0 quantity

  _convertNumberToFraction(item: IIngredient): void{
    let nmb = number(item.quantity);
    let frc = fraction(nmb);
    let quotient  = 0;
    let remainder = frc.n;

    if(frc.n > frc.d) {
      quotient = Math.floor(frc.n / frc.d);
      remainder = frc.n % frc.d;
    }
   item.quantityDisplayValue = !!(item.quantity % 1) ? `${quotient > 0 ? `${quotient} ` : ""}${remainder }/${frc.d}` : item.quantity?.toString();
  }
  
}

