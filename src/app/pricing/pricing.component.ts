import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  _v = false;

  constructor() { }

  ngOnInit(): void {
  }


  toogleV() {
    this._v = !this._v;
  }

}
