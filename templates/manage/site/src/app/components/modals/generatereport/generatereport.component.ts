import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.css']
})
export class GeneratereportComponent implements OnInit {

  constructor() { }
  reportForm: FormGroup;
  ngOnInit(): void {
  // Default Form
  this.reportForm = new FormGroup({
    clientName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    dateOfBirth: new FormControl('', [
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
    reportType: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    reportperiod: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    appointmentWith: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ])
  });
}
onSubmit() {
  console.log(this.reportForm);
}

}
