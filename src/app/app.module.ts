import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { NgxBootstrapIconsModule, facebook, instagram, twitter, search, pencil,bookmark } from 'ngx-bootstrap-icons';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {ReactiveFormsModule} from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  SearchFormComponent,
  FooterComponent,
  ModalComponent,
  ThemeSwitcherComponent,
  BookmarkComponent,
  DropdownComponent,
  CategoriesComponent
  } from './components';
import { LayoutComponent } from './layout';
import {RecipesModule} from "./modules/recipes/recipes.module";

const icons = {
  twitter,
  instagram,
  facebook,
  search,
  pencil,
  bookmark
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SearchFormComponent,
    FooterComponent,
    ModalComponent,
    ThemeSwitcherComponent,
    BookmarkComponent,
    DropdownComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    RecipesModule,
    MdbCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
