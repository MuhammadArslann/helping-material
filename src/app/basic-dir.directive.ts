import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicDir]'
})
export class BasicDirDirective implements OnInit {

  numClick = 0;

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    
    this.elRef.nativeElement.style.backgroundColor = 'orange'
    this.elRef.nativeElement.style.color = 'blue'
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    
    this.elRef.nativeElement.style.backgroundColor = 'green'
  }
  @HostListener('click',['$event.target']) onClick(btn: any){
    console.log('number of clicks: ', this.numClick++ )
  }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'grey'; 
}

}
