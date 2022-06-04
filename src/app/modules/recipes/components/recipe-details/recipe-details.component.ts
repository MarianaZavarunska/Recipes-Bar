import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private  activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

}
