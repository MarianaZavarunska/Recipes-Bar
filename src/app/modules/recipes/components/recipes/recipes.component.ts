import {Component, Input, OnInit} from '@angular/core';
import {PageChangedEvent} from "ngx-bootstrap/pagination";

import { IRecipe } from 'src/app/models';
import { DataService } from 'src/app/services';
import {RecipesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements  OnInit{
  recipesToRender: IRecipe[] = [];
  resetPage = true;
  data:string;

  @Input()
  recipes: IRecipe[] = []

  constructor(private recipeService: RecipesService, private dataService: DataService,
              private route: ActivatedRoute, private router: Router) {
    this.data = this._getData();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        let page = +params['page'];
        let query = params['query'];
        if(this.resetPage){
          this.resetPage = false;
          this.router.navigate(
            ['/recipes'],
            {
              queryParams: { page: 1, query: query },
              queryParamsHandling: 'merge' }
          );
        }
        this.recipeService.getRecipes(query)
          .subscribe( ({data})=> {
            this.recipes = data.recipes;
            this.recipesToRender = data.recipes.slice(0,12);
            this.recipesToRender = this.recipes.slice((+params['page'] - 1)* 12 ,+params['page'] * 12);
          });
      });
  }


  pageChanged(event: PageChangedEvent): void {
      this.router.navigate(
        ['/recipes'],
        {
          queryParams: { page: event.page },
          queryParamsHandling: 'merge' }
      );
  }

  _getData():string {
    const time = new Date();
    const timeString = time.toLocaleString('en-US', { day:'numeric', month:'long', weekday:'long', hour: 'numeric', minute:'numeric', hour12: true})

    return timeString;
  }
}
