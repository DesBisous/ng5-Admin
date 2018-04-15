import { Injectable } from '@angular/core';
import {AdItem} from '../extend/ad-item';
import {Ad1Component} from '../component/angular/dynamic/dynamic-child/ad-1/ad-1.component';
import {Ad2Component} from '../component/angular/dynamic/dynamic-child/ad-2/ad-2.component';

@Injectable()
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(Ad1Component, {title: '组件一', src: './assets/images/po1.png'}),

      new AdItem(Ad1Component, {title: '组件二', src: './assets/images/po2.png'}),

      new AdItem(Ad2Component, {title: '组件三', src: './assets/images/po3.png'}),

      new AdItem(Ad2Component, {title: '组件四', src: './assets/images/po4.png'}),
    ];
  }
}
