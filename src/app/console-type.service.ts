import { Injectable } from '@angular/core';
import { NestedServiceService } from './nested-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleTypeService {

  constructor(private nestService: NestedServiceService) {
   }
   getConsole(){
    console.log('This message is shown through service file!');
   }
   getNestService(){
     this.nestService.callNested();
   }
}
