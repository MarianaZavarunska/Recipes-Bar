import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  setCategory(category: string):void{
    this.router.navigate(
      ['/recipes'],
      {
        queryParams: { page: 1, query: category},
        queryParamsHandling: 'merge' }
    );
  }

}
