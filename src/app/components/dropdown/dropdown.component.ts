import {Component, OnInit} from '@angular/core';

import {DataService} from "../../services";
import {IRecipe} from "../../models";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  isBookmarked: boolean;
  bookmarkedRecipes: Partial<IRecipe>[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.bookmarks.subscribe(value => {
      this.isBookmarked = value.isBookmarked;
      this.bookmarkedRecipes = value.bookmarkedRecipes;
    })
  }

}
