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
  }


}
