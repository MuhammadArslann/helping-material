import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { ConsoleTypeService } from "../console-type.service";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
})
export class serverComponent{
   @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    newServerName = "";
    newServerContent = "";
    @ViewChild('contentInput') contentInput!: ElementRef;

    constructor(private service: ConsoleTypeService){ }


    onAddServer(nameInput: HTMLInputElement){
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.contentInput.nativeElement.value
        })
        this.service.getConsole();
    }
    onAddBlueprint(nameInput: HTMLInputElement){
        this.bluePrintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.contentInput.nativeElement.value
        })
    }
}