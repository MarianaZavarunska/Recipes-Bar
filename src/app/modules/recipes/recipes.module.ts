import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {
  NgxBootstrapIconsModule,
  cloudUpload,
  alarm,
  people,
  fileEarmarkMinus,
  fileEarmarkPlus,
  person,
  bookmark,
  bookmarkFill,
  arrowBarRight,
  checkLg,
} from 'ngx-bootstrap-icons';

import {RecipesComponent, RecipeComponent, NewRecipeComponent,RecipeDetailsComponent,CarouselComponent } from './components';
import { RecipesRoutingModule } from './recipes-routing.module';
import {RecipesService} from "./services";


const icons = {
  alarm,
  cloudUpload,
  people,
  fileEarmarkMinus,
  fileEarmarkPlus,
  person,
  bookmark,
  bookmarkFill,
  arrowBarRight,
  checkLg
}

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    NewRecipeComponent,
    CarouselComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCarouselModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  exports: [
    NewRecipeComponent
  ],
  providers: [
    RecipesService
  ]

})
export class RecipesModule{ }
