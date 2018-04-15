import {Directive, ElementRef, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective implements OnChanges {

  @Input() defaultImgSrc: string;
  @Input('appAttr') imgSrc: string[];
  index: number;

  constructor(private el: ElementRef) {
    this.index = 0;
  }

  ngOnChanges(): void {
    this.el.nativeElement.src = this.defaultImgSrc;
  }

  @HostListener('click') onMouseEnter() {
    this.index = ( this.index + 1 ) % 4;
    let img = this.imgSrc[this.index];
    this.setImgSrc( img || this.defaultImgSrc || './assets/images/po1.png' );
  }

  private setImgSrc(imgSrc: string) {
    this.el.nativeElement.src = imgSrc;
  }

}
