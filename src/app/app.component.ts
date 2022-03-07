import { Component, HostListener, OnInit } from '@angular/core';
import { ConsoleTypeService } from './console-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just Testing!'}];
  onlyOdd = false;
  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  counter = 0;
  constructor(private service: ConsoleTypeService){}
  ngOnInit(): void {
      this.service.getConsole();
  }


  @HostListener('window: keyup',['$event'] )
  handle(event: KeyboardEvent){
    this.counter++;
  }
  resetCounter(){
    this.counter = 0;
  }

  onServerAdded(serverData: {serverName: string, serverContent: string} ){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
    this.service.getNestService();
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
}
