import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

export const searchAnimate = trigger('searchAnimate', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    animate(200, keyframes([
      style({opacity: 0, width: '0', transform: 'translateX(20px)', offset: 0}),
      style({opacity: 1, width: '*', transform: 'translateX(0)',     offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(200, keyframes([
      style({opacity: 1, width: '*', transform: 'translateX(0)',     offset: 0}),
      style({opacity: 0, width: '0', transform: 'translateX(20px)',  offset: 1.0})
    ]))
  ])
]);

export const zoom = trigger('zoom', [
  state('in', style({transform: 'scale(1)'})),
  transition('void => *', [
    animate(1000, keyframes([
      style({opacity: 0, transform: 'scale(.3)', offset: 0}),
      style({opacity: 1, transform: 'scale(1)', offset: 0.5}),
      style({opacity: 1, offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(1000, keyframes([
      style({opacity: 1, transform: 'scale(1)', offset: 0}),
      style({opacity: 0, transform: 'scale(.3)', offset: 0.5}),
      style({opacity: 0, offset: 1.0})
    ]))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  state('in', style({opacity: 1})),
  transition('void => *', [
    animate(800, keyframes([
      style({opacity: 0}),
      style({opacity: 1})
    ]))
  ]),
  transition('* => void', [
    animate(800, keyframes([
      style({opacity: 1}),
      style({opacity: 0})
    ]))
  ])
]);
