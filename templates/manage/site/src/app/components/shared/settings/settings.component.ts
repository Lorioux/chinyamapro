import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  settingToggle = () => {
    document.getElementById('body').classList.toggle('ms-settings-open')
  }
  darkToggle = () => {
    document.getElementById('body').classList.toggle('ms-dark-theme')
  }

  ngOnInit(): void {
  }

}
