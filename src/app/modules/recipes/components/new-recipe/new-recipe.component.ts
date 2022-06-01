import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {DataService} from "../../../../services";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
 form:FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm():void{
    this.form = new FormGroup({
      title: new FormControl(null ),
      sourceUrl: new FormControl(null ),
      image: new FormControl(null ),
      publisher: new FormControl(null ),
      cookingTime: new FormControl(null ),
      servings: new FormControl(null ),
      ingredient1: new FormControl(null ),
      ingredient2: new FormControl(null ),
      ingredient3: new FormControl(null ),
      ingredient4: new FormControl(null ),
      ingredient5: new FormControl(null ),
      ingredient6: new FormControl(null ),
    });
  }
  uploadToStorage():void{
    // this.dataService.uploadStorage.next(this.form.value);
    console.log(this.form.value)
    // this.form.reset();
  }

}
