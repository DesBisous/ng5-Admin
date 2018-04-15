import { Component, OnInit } from '@angular/core';
import {zoom} from '../../../animate/animate';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.less'],
  animations: [ zoom ]
})
export class BasicFormComponent implements OnInit {

  values: string;
  heroes: Array<string>;

  constructor() {
    this.values = '';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
