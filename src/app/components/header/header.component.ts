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

 // TODO:CHILDREN background
      const paginationPageArray = Array.from(this.document.body.getElementsByClassName('pagination-page'));
      const paginationLinkArray = Array.from(this.document.body.getElementsByClassName('page-link'));

      this.isSwitched = value;
      if (this.isSwitched) {

        this.document.body.classList.add('switched');
        this.document.body.getElementsByClassName('search-input')[0].classList.add('switched')
        this.document.body.getElementsByClassName('carousel-control-prev-icon')[0]?.classList.add('switched')
        this.document.body.getElementsByClassName('carousel-control-next-icon')[0]?.classList.add('switched')
        paginationPageArray.forEach((item) => item.classList.add('switched'));
        paginationLinkArray .forEach((item) => item.classList.add('switched'));

      } else {
        this.document.body.classList.remove('switched');
        this.document.body.getElementsByClassName('search-input')[0].classList.remove('switched')
        this.document.body.getElementsByClassName('carousel-control-next-icon')[0]?.classList.remove('switched')
        this.document.body.getElementsByClassName('carousel-control-prev-icon')[0]?.classList.remove('switched')
        paginationPageArray.forEach((item) => item.classList.remove('switched'));
        paginationLinkArray.forEach((item) => item.classList.remove('switched'));
      }
    })
  }

  _changeStyle():void {

  }
}
