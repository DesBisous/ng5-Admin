import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.less'],
  animations: [ zoom ]
})
export class PipeComponent implements OnInit {

  birthday: Date;
  toggle: boolean;

  power: number;
  factor: number;

  heroes: any[];
  canFly: boolean;
  mutate: boolean;
  HEROES =  [
    {name: 'Windstorm', canFly: true},
    {name: 'Bombasto',  canFly: false},
    {name: 'Magneto',   canFly: false},
    {name: 'Tornado',   canFly: true}
  ];

  constructor() {
    this.birthday = new Date(1994, 9, 14);
    this.toggle = false;

    this.power = 2;
    this.factor = 1;

    this.heroes = [];
    this.canFly = true;
    this.mutate = true;
  }

  ngOnInit() {
    this.reset();
  }

  get format()   {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() { this.heroes = this.HEROES.slice(); }
}
