import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-makeappointment',
  templateUrl: './makeappointment.component.html',
  styleUrls: ['./makeappointment.component.css']
})
export class MakeappointmentComponent implements OnInit {

  constructor() { }

  appointmentForm: FormGroup;
  ngOnInit(): void {
    // Default Form
    this.appointmentForm = new FormGroup({
      clientName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      issue: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      departmentName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      appointmentWith: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      appointmentDate: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }
  onSubmit() {
    console.log(this.appointmentForm);
  }
  onReset() {
    this.appointmentForm.reset()
  }

}
