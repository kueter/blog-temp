import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  view = false;

  angularProjects = [
    { name: 'Dashboard Template UI angular 9', preload: '../../assets/img/dash1.png', views: 210 , claps: 20},
    { name: 'Blog Template UI angular 9', preload: '../../assets/img/bl.png', views: 110 , claps: 10},
    { name: 'E-shop Fresh Template UI angular 9 ', preload: '../../assets/img/ecom1.png', views: 200 , claps: 170},
    { name: 'E-shoes Template UI angular 9', preload: '../../assets/img/ecos.png', views: 210 , claps: 20},
    { name: 'Dashboard UI dev components angular 9', preload: '../../assets/img/dash2.png', views: 100 , claps: 19},
    { name: 'Chat Box Bot UI angular 9', preload: '../../assets/img/ch.png', views: 1000 , claps: 409},
    { name: 'Photo Gallery UI angular 9', preload: '../../assets/img/gall.png', views: 780 , claps: 309}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  switchView() {
    this.view = !this.view;
  }


}
