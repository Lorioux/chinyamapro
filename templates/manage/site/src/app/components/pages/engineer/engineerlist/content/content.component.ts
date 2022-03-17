import { Component, OnInit } from '@angular/core';
import chats from '../../../../../data/chats.json';
import groups from '../../../../../data/groups.json';
import contacts from '../../../../../data/contact.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public chats = chats;
  public groups = groups;
  public contacts = contacts;
  // Engineer list
  engineersblock = [
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Michael Sullivan',
      designation: 'Ophthalmologist',
      location: 'United States, San Francisco'
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Linda Barrett',
      designation: 'Dentist',
      location: 'United States, San Francisco'
    },
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'Ronald Jacobs',
      designation: 'Oncologist',
      location: 'United States, San Francisco'
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Mark Hunter',
      designation: 'Cardiologist',
      location: 'United States, New York'
    },
    {
      img: 'assets/img/dashboard/Engineer-5.jpg',
      name: 'Cristina Groves',
      designation: 'Psychiatrist',
      location: 'United States, California'
    },
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Justin Parker',
      designation: 'Pediatrics',
      location: 'United States, New York'
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Shirley Willis',
      designation: 'Radiologist',
      location: 'United States, San Francisco'
    },
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'Diana Bailey',
      designation: 'General Surgery',
      location: 'United States, California'
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Albert Sandoval',
      designation: 'Neurologist',
      location: 'United States, San Francisco'
    },
  ];
  // Engineers Status
  engineersstatus = [
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'James Zathila',
      designation: 'Gynaecologist',
      available: false,
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'John Doe',
      designation: 'Radiotherapist',
      available: true,
    },
    {
      img: 'assets/img/dashboard/Engineer-5.jpg',
      name: 'Khadiza Rehna',
      designation: 'General Surgeon',
      available: false,
    },
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Peter Amber',
      designation: 'Orthopedic',
      available: true,
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Helen Southern',
      designation: 'Heart Surgeon',
      available: true,
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Jordan',
      designation: 'Heart Surgeon',
      available: false,
    },
  ];

  ngOnInit(): void {
  }

}
