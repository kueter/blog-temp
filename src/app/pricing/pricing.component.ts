import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  _v = false;

  currentItem;

  prices = [
    { name: 'service_1', option: [ { name:'option_A', state: false},{ name:'option_B', state: true},{ name:'option_C', state: false} ]},
    { name: 'service_2', option: [ { name:'option_A', state: true},{ name:'option_B', state: true},{ name:'option_C', state: false}, { name:'option_D', state: true}  ]},
    { name: 'service_3', option: [ { name:'option_A', state: false},{ name:'option_B', state: true},{ name:'option_C', state: true} ]},
    { name: 'service_4', option: [ { name:'option_A', state: true},{ name:'option_B', state: true},{ name:'option_C', state: true},{ name:'option_D', state: false}  ]},
    { name: 'service_5', option: [ { name:'option_A', state: true},{ name:'option_B', state: false},{ name:'option_C', state: false} ]},
    { name: 'service_6', option: [ { name:'option_A', state: true},{ name:'option_B', state: true},{ name:'option_C', state: true},{ name:'option_D', state: true}  ]},
    { name: 'service_7', option: [ { name:'option_A', state: false},{ name:'option_B', state: false},{ name:'option_C', state: true},{ name:'option_D', state: true}  ]},
    { name: 'service_8', option: [ { name:'option_A', state: true},{ name:'option_B', state: true}]},
    { name: 'service_9', option: [ { name:'option_A', state: false},{ name:'option_B', state: true}]},
  ];

 constructor() { }

  ngOnInit(): void {
  }


  toogleV(item:any) {
    this._v = true;
    this.currentItem = item;
    console.log(item);
  }

  closeV() {
    this._v = false;
  }

}
