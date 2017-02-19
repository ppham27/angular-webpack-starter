import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[focusOnEdit]',
})
export class FocusOnEdit {
  constructor(private readonly elementRef: ElementRef) {}
  
  focus() {
    this.elementRef.nativeElement.focus();
  }
}
