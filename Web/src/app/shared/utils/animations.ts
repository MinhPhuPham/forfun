import { trigger, transition, query, style, animate, state } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('* => *', [
    query(
      ':enter', [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const fadeInOutState = trigger('fadeInOutState', [
  state('in', style({ opacity: 1 })),
  state('out', style({ opacity: 0 })),
  transition('in => out', animate('200ms ease-in-out')),
  transition('out => in', animate('200ms ease-in-out'))
])