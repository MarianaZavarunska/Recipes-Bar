import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
 searchStorage = new BehaviorSubject<{recipe: string}>({ recipe: ""})
  uploadStorage = new BehaviorSubject<{recipe: string}>({ recipe: ""})
  constructor() { }
}
