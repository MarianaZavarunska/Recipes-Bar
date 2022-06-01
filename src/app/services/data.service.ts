import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IIngredient, IRecipe} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 searchStorage = new BehaviorSubject<{recipe: string}>({ recipe: ""})
  uploadStorage = new BehaviorSubject<{title: string}>({ title: ""})

  // uploadStorage = new BehaviorSubject<IRecipe>({
  //   id: '',
  //   title: '',
  //   publisher: '',
  //   image_url: '',
  //   ingredients: [],
  //   source_url: '',
  //   servings: 0,
  //   cooking_time: 0
  // })

  constructor() { }
}
