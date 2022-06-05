import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {DataService} from "../../../../services";
import {IIngredient, IRecipe} from "../../../../models";
import { RecipesService } from '../../services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
 form:FormGroup;
  @Output() onCreate: EventEmitter<void> = new EventEmitter();

  constructor(private dataService: DataService, private recipesService:RecipesService, private router:Router) { }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm():void{
    this.form = new FormGroup({
      title: new FormControl(null ),
      sourceUrl: new FormControl("www.google.com" ),
      image: new FormControl("http://forkify-api.herokuapp.com/images/7988559586.jpg" ),
      publisher: new FormControl("Mariana" ),
      cookingTime: new FormControl(55 ),
      servings: new FormControl(5 ),
      ingredient1: new FormControl("15,gram,salt" ),
      ingredient2: new FormControl(null ),
      ingredient3: new FormControl("15,gram,butter" ),
      ingredient4: new FormControl("15,gram,bacon" ),
      ingredient5: new FormControl(null),
      ingredient6: new FormControl(null ),
    });
  }
  uploadToStorage():void{

    const ingredientsArr = [];

    for (const [key, value] of Object.entries(this.form.value)) {
      if (key.includes('ingredient') && value != null) {
        ingredientsArr.push(value);
      }
    }

    // @ts-ignore
    const ingredientsArrForUpload:IIngredient[] =  ingredientsArr.map((value:string) => {
      let arr = value.split(",");
      const item :IIngredient= {
        quantity: Number(arr[0]),
        unit: arr[1],
        description: arr[2]
      }
      return item;
    })

    const newRecipe:IRecipe = {
      id: new Date().getMilliseconds().toString(),
      title:this.form.value.title,
      source_url: this.form.value.sourceUrl,
      image_url: this.form.value.image,
      publisher : this.form.value.publisher,
      cooking_time: this.form.value.cookingTime,
      servings: this.form.value.servings,
      ingredients: ingredientsArrForUpload,
    }

    this.recipesService.createRecipe(newRecipe).subscribe(el =>
    {
      this.router.navigate(
        ['/recipes'],
        {
          queryParams: { page: 1, query: el.data.recipe.title},
          queryParamsHandling: 'merge' }
      );

      this.onCreate.emit();
    });
    this.form.reset();
  }

}
