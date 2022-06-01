import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IRecipe, IResponse} from "../../../models";
import { urls } from 'src/app/config/urls';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(searchParam = 'pizza'): Observable<IResponse> {
    return this.http.get<IResponse>(`${urls.recipes}&search=${searchParam}`);
  }

  createRecipe(uploadedRecipe:IRecipe):Observable<any> {
    return this.http.post(`${urls.recipes}`,uploadedRecipe);
  }
}
