import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../services";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm():void{
    this.form = new FormGroup({
      recipe: new FormControl(null ),
    });
  }


  saveToStorage() {
    this.dataService.searchStorage.next(this.form.value);
    this.form.reset();
  }
}
