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

  }

  ngOnInit() {
    this.dataService.isSwitchStorage.subscribe(value => {

      const paginationPageArray = Array.from(this.document.body.getElementsByClassName('pagination-page'));
      const paginationLinkArray = Array.from(this.document.body.getElementsByClassName('page-link'));

      this.isSwitched = value;
      if (this.isSwitched) {

        this.document.body.classList.add('switched');
        this._changeStyle('add','search-input');
        this._changeStyle('add', 'carousel-control-prev-icon');
        this._changeStyle('add', 'carousel-control-next-icon');

        paginationPageArray.forEach((item) => item.classList.add('switched'));
        paginationLinkArray .forEach((item) => item.classList.add('switched'));

      } else {
        this.document.body.classList.remove('switched');
        this._changeStyle('remove','search-input');
        this._changeStyle('remove', 'carousel-control-next-icon');
        this._changeStyle('remove', 'carousel-control-prev-icon');
        paginationPageArray.forEach((item) => item.classList.remove('switched'));
        paginationLinkArray.forEach((item) => item.classList.remove('switched'));
      }
    })
  }

  _changeStyle(action:string, classN: string) {
    if(action === "add") this.document.body.getElementsByClassName(classN)[0]?.classList.add('switched');
    if(action === "remove") this.document.body.getElementsByClassName(classN)[0]?.classList.remove('switched');
  }
}
