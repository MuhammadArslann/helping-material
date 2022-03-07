import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NestedServiceService {

  constructor() { }
  callNested(){
    console.log("You are calling a nested service!");
  }
}
