import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-routechild-1',
  templateUrl: './routechild-1.component.html',
  styleUrls: ['./routechild-1.component.less']
})
export class Routechild1Component implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.queryParams['name'];
  }

  ngOnInit() {
  }

}
