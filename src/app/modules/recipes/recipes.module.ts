import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipesComponent, RecipeComponent  } from './components';
import { RecipesRoutingModule } from './recipes-routing.module';
import {RecipesService} from "./services";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule,
  ],
  providers: [
    RecipesService
  ]

})
export class RecipesModule{ }
