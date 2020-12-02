import { query, style, animate, group, transition, trigger, state, keyframes  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.4s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.4s ease-out', style({ transform: 'translateX(100%)' }))], {
          optional: true,
      }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.4s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.4s ease-out', style({ transform: 'translateX(-100%)' }))], {
          optional: true,
      }),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('outletAnimation', [
      transition('* => home', right),
      transition('home => *', left),
      transition('* => testimony', right),
      transition('testimony => *', left),

      transition('works => services', left),
      transition('services => works', right),
    ]),
    trigger('clip', [
      state('home', style({
        width: '40%', height: '642px', 'background-color':'#008080'
      })),
      state('works', style({
        width: '40%', height: '642px', 'background-color':'#008080'
      })),
      state('services', style({
        width: '40%', height: '642px', 'background-color':'#008080'
      })),
      state('testimony', style({
         width: '40%', height: '642px', 'background-color':'#008080'
      })),
      transition('home => works', animate('1000ms',keyframes([
          style({ offset: 0 , 'clipPath': 'polygon(0 0, 59% 89%, 100% 100%, 0% 100%)'}),
          style({ offset: 1 , 'clipPath': 'polygon(0 0, 59% 70%, 100% 100%, 0% 100%)'}),
      ])))
    ])
  ],
})
export class AppComponent implements OnInit{

  title = 'blog';
  anima: any;

  constructor() {

  }

  ngOnInit(): void {

  }

  preparedRoute(outlet: RouterOutlet) {
    this.anima = outlet.activatedRouteData.animation;
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


}
