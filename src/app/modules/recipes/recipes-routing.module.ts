import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { RecipesComponent } from './components';


const routes: Routes = [
  { path: '', component: RecipesComponent}
  // {patch: ':id', component: }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class RecipesRoutingModule { }
