import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IIngredient, IRecipe} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 searchStorage = new BehaviorSubject<{recipe: string}>({ recipe: ""});
  uploadStorage = new BehaviorSubject<{title: string}>({ title: ""});
  isSwitchStorage = new BehaviorSubject<boolean>(false);
  bookmarks = new BehaviorSubject<{isBookmarked: boolean,bookmarkedRecipes : Partial<IRecipe>[]}>({
    isBookmarked:false,
    bookmarkedRecipes:[],
  });

  constructor() { }
}
