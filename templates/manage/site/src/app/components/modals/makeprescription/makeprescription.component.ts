import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-makeprescription',
  templateUrl: './makeprescription.component.html',
  styleUrls: ['./makeprescription.component.css']
})
export class MakeprescriptionComponent implements OnInit {

  constructor() { }

  prescriptionForm: FormGroup;
  ngOnInit(): void {
    // Default Form
    this.prescriptionForm = new FormGroup({
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
      medication: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      periodOfmedication: new FormControl('', [
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
    console.log(this.prescriptionForm);
  }
  onReset() {
    this.prescriptionForm.reset()
  }

}
