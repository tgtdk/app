import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeText('Hovered Text');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeText('Original Text');
  }

  private changeText(newText: string) {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', newText);
  }


}
