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
      roomNo: new FormControl('', [
        Validators.required
      ]),
      taskType: new FormControl('', [
        Validators.required
      ]),
      admitDate: new FormControl('', [
        Validators.required
      ]),
      taskCapacity: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [])
    });
  }
  onSubmit() {
    console.log(this.addForm);
  }
  onReset() {
    this.addForm.reset()
  }

}
