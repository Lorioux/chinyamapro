import { Component, OnInit } from '@angular/core';
import clientreport from '../../../../../data/clientreport.json'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public clientreport = clientreport;

  ngOnInit(): void {
  }

}
