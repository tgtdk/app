import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicRedEle]'
})
export class BasicRedEleDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "blue";
   }

}
