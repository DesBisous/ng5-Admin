import { Component, OnInit } from '@angular/core';
import {zoom} from '../../../animate/animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.less'],
  animations: [ zoom ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
