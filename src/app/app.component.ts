import {Component, Inject} from '@angular/core';

import {DataService} from "./services";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent {
  title = 'Recipes-Bar';


}
