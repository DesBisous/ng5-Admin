import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false // pure标志设置为false，我们可以制作一个非纯管道。
})
export class FlyingHeroesImpurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(hero => hero.canFly);
  }

}
