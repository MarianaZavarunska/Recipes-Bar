import {Component, OnInit, ViewChild} from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';

import {IRecipe} from "../../../../models";
import {RecipesService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit  {
  @ViewChild('carousel') carousel!: MdbCarouselComponent;

  topRecipes: IRecipe[];
  resultsCount:number;


  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      const query =  params != null && params['query'] ? params['query'] : 'avocado';
      this.recipesService.getRecipes(query).subscribe((response) => {

        this.resultsCount = response.data.recipes.length;
        const minCount =  this._generateRandomNumber();
        const slidesCount = 6;

        this.topRecipes = response.data.recipes.slice(minCount, minCount + slidesCount);
      });
    })
  }


  _generateRandomNumber(): number {
    const min = 0;
    const max = this.resultsCount;

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (result + 6 <= this.resultsCount) {
      return result;
    }
    if (this.resultsCount - 6 > 0)  {
      return this.resultsCount - 6;
    }
    return min;
  }
}
