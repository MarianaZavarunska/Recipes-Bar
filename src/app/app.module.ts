import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { NgxBootstrapIconsModule, facebook, instagram, twitter} from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';


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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
