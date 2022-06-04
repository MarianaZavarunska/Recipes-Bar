import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm():void{
    this.form = new FormGroup({
      recipe: new FormControl(null, [Validators.pattern('^[A-Za-z]+')] ),
    });
  }


  saveToStorage() {

    this.router.navigate(
      ['/recipes'],
      {
        queryParams: { page: 1, query: this.form.value.recipe},
        queryParamsHandling: 'merge' }
    );
    this.form.reset();
  }
}
