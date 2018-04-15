import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
  animations: [zoom]
})
export class GridComponent implements OnInit {

  orderList = [ 1, 2, 3, 4 ];
  gutter = 16;
  count = 4;
  marksGutter = {
    8 : 8,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48
  };
  marksCount = {
    2 : 2,
    3 : 3,
    4 : 4,
    6 : 6,
    8 : 8,
    12: 12
  };

  constructor() { }

  ngOnInit() {
  }

  reverse() {
    this.orderList = [...this.orderList.reverse()];
  }

  generateArray(value) {
    return new Array(value);
  }

}
