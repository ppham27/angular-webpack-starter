import {SimpleChanges, Directive, ElementRef, OnChanges, Input} from '@angular/core';

@Directive({
  selector: '[focusWhen]',
})
export class FocusWhenDirective implements OnChanges {
  @Input() focusWhen: any;

  constructor(private readonly elementRef: ElementRef) {}
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['focusWhen'] &&
        !!changes['focusWhen'].currentValue &&
        !changes['focusWhen'].previousValue) {
      this.elementRef.nativeElement.focus();
    }
  }
}
