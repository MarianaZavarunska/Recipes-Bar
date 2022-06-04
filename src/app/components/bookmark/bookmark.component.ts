import {Component, Input, OnInit} from '@angular/core';
import { IRecipe } from 'src/app/models';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input()
  recipe: Partial<IRecipe>;

  constructor() { }

  ngOnInit(): void {
  }

}
