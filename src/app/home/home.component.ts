import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
    this.ContactF = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required,]),
      message: new FormControl('', [Validators.required,]),
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

}
