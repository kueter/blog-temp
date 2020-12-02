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
        width: '70%', height: '642px', 'background-color':'#008080','clipPath': 'polygon(0 0, 11% 89%, 100% 100%, 0% 100%)'
      })),
      state('works', style({
        width: '70%', height: '642px', 'background-color':'#008080', 'clipPath': 'polygon(0 0, 11% 70%, 100% 100%, 0% 100%)'
      })),
      state('services', style({
        width: '70%', height: '642px', 'background-color':'#008080', 'clipPath': 'polygon(0 0, 55% 73%, 100% 100%, 0% 100%)'
      })),
      state('testimony', style({
         width: '70%', height: '642px', 'background-color':'#008080', 'clipPath': 'polygon(0 0, 45% 27%, 100% 100%, 0% 100%)'
      })),
      transition('* => works', animate('500ms linear', keyframes([
          style({ 'clipPath': 'polygon(0 0, 11% 70%, 100% 100%, 0% 100%)'}),
      ]))),
      transition('* => services', animate('500ms linear', keyframes([
        style({ 'clipPath': 'polygon(0 0, 55% 73%, 100% 100%, 0% 100%)'}),
      ]))),
      transition('* => testimony', animate('500ms linear', keyframes([
        style({ 'clipPath': 'polygon(0 0, 45% 27%, 100% 100%, 0% 100%)'}),
      ]))),
      transition('* => home', animate('500ms linear',keyframes([
        style({'clipPath': 'polygon(0 0, 11% 89%, 100% 100%, 0% 100%)'}),
      ]))),
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
