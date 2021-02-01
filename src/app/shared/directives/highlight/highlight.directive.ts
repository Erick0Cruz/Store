import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
  }

}
