import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";

import {RecipesComponent, RecipeComponent, NewRecipeComponent } from './components';
import { RecipesRoutingModule } from './recipes-routing.module';
import {RecipesService} from "./services";
import {CarouselComponent} from "../../components";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    NewRecipeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCarouselModule
  ],
  exports: [
    NewRecipeComponent
  ],
  providers: [
    RecipesService
  ]

})
export class RecipesModule{ }
