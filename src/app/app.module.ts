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
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';
import { CreateFormComponent } from './components/create-form/create-form.component';


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
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
