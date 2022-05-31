import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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

  searchRecipe: { recipe: string};
  currentPage = 1;
  page?:number;
  recipesToRender: IRecipe[] = []

  @Input()
  recipes: IRecipe[] = []


  constructor(private recipeService: RecipesService, private dataService: DataService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params)
          this.recipesToRender = this.recipes.slice((+params['page'] - 1)* 12 ,+params['page'] * 12);
        }
      );
    this.dataService.searchStorage.subscribe(value => {
      this.searchRecipe = value;
      let query = this.searchRecipe.recipe === ''? 'pizza' : this.searchRecipe.recipe;
      this.recipeService.getRecipes(query)
        .subscribe( ({data})=> {
          this.recipes = data.recipes;
          this.recipesToRender = data.recipes.slice(0,12)

        });
    })
  }


  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
      this.router.navigate(
        ['/recipes'],
        {
          queryParams: { page: this.page },
          queryParamsHandling: 'merge' }
      );
  }


}
