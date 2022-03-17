import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {

  constructor() { }

  public getCurrentDate = new Date().toLocaleDateString('en-US');
  public getCurrentTime = new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: "numeric",
    minute: "numeric"
  });;


  ngOnInit(): void {
  }

}
