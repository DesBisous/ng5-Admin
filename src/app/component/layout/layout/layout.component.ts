import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../animate/animate';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  animations: [ fadeIn ]
})
export class LayoutComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
