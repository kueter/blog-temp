import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('.6s ease-out',
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('.3s ease-in',
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeComponent implements OnInit {

  ContactF: FormGroup;
  _c =false;
  spin = false;

  constructor() { }

  ngOnInit(): void {
    // this.toast();
    this.ContactF = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(2)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        ),
      ]),
      message: new FormControl('', [Validators.required,Validators.minLength(150)]),
    });
  }

  togContact() {
    this._c = !this._c;
  }

  get name() {
    return this.ContactF.get('name');
  }

  get email() {
    return this.ContactF.get('email');
  }

  get message() {
    return this.ContactF.get('message');
  }



  send() {
    this.spin = true;
    setTimeout(() => {
      this.spin = false;
      this.toast();
    }, 1000);
  }


  toast() {
    $(".ntoast").fadeIn()
    .animate({bottom: '5%'}, 800,()=> {
      $(".ntoast").fadeOut(7000);
    });
  }
}
