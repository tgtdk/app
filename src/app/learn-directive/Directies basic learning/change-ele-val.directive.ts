import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeEleVal]'
})
export class ChangeEleValDirective implements OnInit {
  

  constructor(private renderer: Renderer2 ,private el:ElementRef) {
      
   }
  ngOnInit(): void {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', "Dhruvil");
  }
   

  // Event listener for mouse hover
  @HostListener('mouseenter') onMouseEnter() {
    this.changeText('TGTDK');
  }

  // // Event listener for mouse leave
  @HostListener('mouseleave') onMouseLeave() {
    this.changeText('Dhruvil');
  }
  private changeText(newText: string) {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', newText);
  }


}
