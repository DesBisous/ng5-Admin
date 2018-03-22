import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../animate/animate';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  animations: [fadeIn]
})
export class IconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
