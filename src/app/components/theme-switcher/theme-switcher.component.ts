import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {
  isSwitch:boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSwitch(){
    this.isSwitch =!this.isSwitch;

   this.dataService.switchStorage.next(this.isSwitch)
  }

}
