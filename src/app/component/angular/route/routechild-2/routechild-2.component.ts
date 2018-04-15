import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';

@Component({
  selector: 'app-routechild-2',
  templateUrl: './routechild-2.component.html',
  styleUrls: ['./routechild-2.component.less']
})
export class Routechild2Component implements OnInit {

  name: string;
  desc: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
    });
    this.route.data.subscribe((data: Data) => {
      this.desc = data[0].desc;
    });
  }

  ngOnInit() {
  }

}
