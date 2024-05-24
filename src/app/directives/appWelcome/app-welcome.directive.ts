import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class AppWelcomeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();

    
    const textNode = this.renderer.createText('Welcome');
    const textElement = this.renderer.createElement('div');
    this.renderer.appendChild(textElement, textNode);
    this.renderer.appendChild(this.el.nativeElement, textElement);

    setTimeout(() => {
      
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }
}


