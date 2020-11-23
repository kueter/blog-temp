import { query, style, animate, group, transition, trigger  } from '@angular/animations';
import { Component } from '@angular/core';


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
    trigger('scrollview', [
      transition('* => me', left),
      transition('me => *', right),
      transition('* => testimony', right),
      transition('testimony => *', left),

      transition('works => services', left),
      transition('services => work', right),
    ])
  ],
})
export class AppComponent {
  title = 'blog';

  currentSection = 'me';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    document.querySelector('#' + section).scrollIntoView();
  }
}
