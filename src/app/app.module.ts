import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
