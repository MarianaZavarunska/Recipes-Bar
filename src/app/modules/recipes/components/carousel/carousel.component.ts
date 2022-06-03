import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';

import {IRecipe} from "../../../../models";
import {RecipesService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit  {
  @ViewChild('carousel') carousel!: MdbCarouselComponent;

  topRecipes: IRecipe[];
  // page:number;
  // totalPages:number;


  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // this.page = +params['page'];

      const query =  params != null && params['query'] ? params['query'] : 'avocado';
      // const maxCount =  this._generateRandomNumber();
      // const minCount = maxCount - 5;

      this.recipesService.getRecipes(query).subscribe((response) => {
        // this.totalPages = response.results ? response.results : 5;
        this.topRecipes = response.data.recipes.slice(10, 16);
      });
      console.log( this.topRecipes);
    })
  }

  ngAfterViewInit(): void {
    this.carousel.stop();
  }
  // TODO: Generate Random Number

  // _generateRandomNumber(): number {
  //   const min = 5;
  //   const max = this.totalPages;
  //
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
}
