import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  cardblock = [
    { img: 'assets/img/basic/card-1.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-2.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-3.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-4.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
  ];
  sortablelist = [
    { icon: 'border_color', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'rss_feed', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'rss_feed', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
  ];
  progresslist = [
    { icon: 'devices', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'fingerprint', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'graphic_eq', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
  ];
  todolist = [
    { img: 'assets/img/dashboard/Engineer-1.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { img: 'assets/img/dashboard/Engineer-2.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { img: 'assets/img/dashboard/Engineer-3.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
  ];

  ngOnInit(): void {
  }

}
