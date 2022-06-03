import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from  '@angular/common';

import { DataService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSwitched:boolean;


  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService) {

    // dataService.switchStorage.subscribe(value=> {
    //   this.isSwitched = value;
    // })
  }

  ngOnInit() {
    this.dataService.switchStorage.subscribe(value => {
      this.isSwitched = value;
      if (this.isSwitched) {
        this.document.body.classList.add('switched');
      } else {
        this.document.body.classList.remove('switched');
      }

    })
  }
}
