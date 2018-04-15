import { Component, OnInit, Input } from '@angular/core';
import { AdInterface } from '../../../../../interface/ad-interface';
import {fadeIn} from '../../../../../animate/animate';

@Component({
  selector: 'app-ad-1',
  templateUrl: './ad-1.component.html',
  styleUrls: ['./ad-1.component.less'],
  animations: [ fadeIn ]
})
export class Ad1Component implements OnInit, AdInterface {
  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
