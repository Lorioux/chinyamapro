import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultslide = [
    { bigimg:"assets/img/advance/slider-1.jpg", img: 'assets/img/advance/slider-2-1040x300.jpg', title: 'Orange Sunset', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/advance/slider-2.jpg", img: 'assets/img/advance/slider-3-1040x300.jpg', title: 'Purple Skies', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/advance/slider-3.jpg", img: 'assets/img/advance/slider-1-1040x300.jpg', title: 'Night Light', text: 'Lorem Ipsum asit dolor kimet' },
  ];

  ngOnInit(): void {
  }

}
