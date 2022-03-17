import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  engineerblock = [
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Michael Sullivan',
      designation: 'Ophthalmologist',
      scheduledate: '25 Jan 2021',
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Linda Barrett',
      designation: 'Dentist',
      scheduledate: '22 Jan 2021',
    },
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Ronald Jacobs',
      designation: 'Oncologist',
      scheduledate: '19 Jan 2021',
    },
    {
      img: 'assets/img/dashboard/Engineer-5.jpg',
      name: 'Mark Hunter',
      designation: 'Cardiologist',
      scheduledate: '21 Jan 2021',
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Cristina Groves',
      designation: 'Psychiatrist',
      scheduledate: '15 Jan 2021',
    },
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Cristina Groves',
      designation: 'Psychiatrist',
      scheduledate: '21 Jan 2021',
    },
  ];
  addForm: FormGroup;
  ngOnInit(): void {
    // Default Form
    this.addForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      time: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      department: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      days: new FormControl('', [
        Validators.required
      ])
    });
  }
  onSubmit() {
    console.log(this.addForm);
  }
  onReset() {
    this.addForm.reset()
  }

}
