import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodo]',
})
export class TodoDirective {
  constructor(private el: ElementRef) {}

  private setShadow(shadow: string): void {
    this.el.nativeElement.style.boxShadow = shadow;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setShadow('5px 5px 10px 2px rgba(0,0,0,.5)');
  }
  
  @HostListener('mouseleave') onMouseLeave(): void {
    this.setShadow('none');
  }
}
