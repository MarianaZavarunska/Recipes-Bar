import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { RecipesComponent, RecipeDetailsComponent } from './components';

const routes: Routes = [
  { path: '', component: RecipesComponent},
  { path: ':id', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class RecipesRoutingModule { }
