import {Component, Input, OnInit} from '@angular/core';
import {AdInterface} from '../../../../../interface/ad-interface';
import {fadeIn} from '../../../../../animate/animate';

@Component({
  selector: 'app-ad-2',
  templateUrl: './ad-2.component.html',
  styleUrls: ['./ad-2.component.less'],
  animations: [ fadeIn ]
})
export class Ad2Component implements OnInit, AdInterface {
  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
