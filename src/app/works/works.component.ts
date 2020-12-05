import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  view = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchView() {
    this.view = !this.view;
    if(this.view == true) {
      $('.mdle').fadeOut(3000);
      $('.large').fadeIn(3000);
    }

    if(this.view == false) {
      $('.large').fadeOut(3000);
      $('.mdle').fadeIn(3000);
    }
  }


}
