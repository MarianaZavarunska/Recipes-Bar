import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { NgxBootstrapIconsModule, facebook, instagram, twitter} from 'ngx-bootstrap-icons';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {ReactiveFormsModule} from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent, SearchFormComponent, FooterComponent, ModalComponent, ThemeSwitcherComponent,CarouselComponent  } from './components';
import { LayoutComponent } from './layout';
import {RecipesModule} from "./modules/recipes/recipes.module";


const icons = {
  twitter,
  instagram,
  facebook
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons),
    ModalModule.forRoot(),
    RecipesModule,
    MdbCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
