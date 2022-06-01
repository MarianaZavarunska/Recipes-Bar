import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipesComponent, RecipeComponent  } from './components';
import { RecipesRoutingModule } from './recipes-routing.module';
import {RecipesService} from "./services";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';


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
  providers: [
    RecipesService
  ]

})
export class RecipesModule{ }
