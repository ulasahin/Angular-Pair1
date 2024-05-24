import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class AppButtonDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#007bff');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
}

