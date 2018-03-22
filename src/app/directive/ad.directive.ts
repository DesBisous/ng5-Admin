import {Directive, ElementRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAd]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef, el: ElementRef) {
    console.log(el);
  }

}
