import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';

@Component({
  selector: 'app-affix',
  templateUrl: './affix.component.html',
  styleUrls: ['./affix.component.less'],
  animations: [ zoom ]
})
export class AffixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(status: boolean) {
    console.log(status);
  }
}
