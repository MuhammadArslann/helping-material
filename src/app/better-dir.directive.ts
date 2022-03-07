import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDir]'
})
export class BetterDirDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.render.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.border = "5px solid black";
  }
  @HostListener('mouseover')
  onMouseOver(){
    this.border = "5px solid brown"
    console.log("Mouse over!")
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.border='';
    console.log("Mouse leave!")
  }
  @HostBinding('style.border')
  border!: string;
}
