import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.less'],
  animations: [ zoom ]
})
export class DirectiveComponent implements OnInit {

  imgSrc: string[];
  defaultImgSrc: string;

  ngIfDirective: boolean;
  imgIndex: number;

  condition: boolean;

  constructor() {
    this.defaultImgSrc = './assets/images/po1.png';
    this.imgSrc = [
      './assets/images/po1.png',
      './assets/images/po2.png',
      './assets/images/po3.png',
      './assets/images/po4.png'
    ];
    this.ngIfDirective = true;
    this.imgIndex = -1;
    this.condition = false;
  }

  ngOnInit() {
  }

}
