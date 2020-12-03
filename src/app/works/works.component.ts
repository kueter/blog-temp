import { Component, OnInit } from '@angular/core';

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
