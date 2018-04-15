import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  animations: [zoom]
})
export class ButtonComponent implements OnInit {
  public size: string;
  public isLoadingOne: boolean;
  public isLoadingTwo: boolean;
  constructor() {
    this.size = 'default';
    this.isLoadingOne = false;
    this.isLoadingTwo = false;
  }
  ngOnInit() {
  }
  loadOne(value) {
    this.isLoadingOne = true;
    setTimeout(_ => {
      this.isLoadingOne = false;
    }, 5000);
  }
  loadTwo(value) {
    this.isLoadingTwo = true;
    setTimeout(_ => {
      this.isLoadingTwo = false;
    }, 5000);
  }
}
