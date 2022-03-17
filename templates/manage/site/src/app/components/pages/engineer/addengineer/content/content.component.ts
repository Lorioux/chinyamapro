import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  addForm: FormGroup;
  ngOnInit(): void {
    // Default Form
    this.addForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      createPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      designation: new FormControl('', [
        Validators.required
      ]),
      department: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      speciallist: new FormControl('', [
        Validators.required
      ]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      image: new FormControl('', []),
      description: new FormControl('', []),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      bloodGroup: new FormControl('', [
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
