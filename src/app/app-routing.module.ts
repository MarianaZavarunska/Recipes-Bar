import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LayoutComponent} from "./layout";


const routes:Routes = [
  { path: '',  component: LayoutComponent, children:[
      { path: '', redirectTo:'recipes', pathMatch: "full"},
      { path: 'recipes', loadChildren: () => import('./modules/recipes/recipes.module').then(c => c.RecipesModule)},

    ]},
  // {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
