import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {RecipesComponent, RecipeComponent, NewRecipeComponent} from './components';
import { RecipesRoutingModule } from './recipes-routing.module';
import {RecipesService} from "./services";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    NewRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewRecipeComponent
  ],
  providers: [
    RecipesService
  ]

})
export class RecipesModule{ }
