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
      createId: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      bloodGroup: new FormControl('', [
        Validators.required
      ]),
      occupation: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', []),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      history: new FormControl('', [
        Validators.required
      ]),
      refer: new FormControl('', [])
    });
  }
  onSubmit() {
    console.log(this.addForm);
  }
  onReset() {
    this.addForm.reset()
  }

}
