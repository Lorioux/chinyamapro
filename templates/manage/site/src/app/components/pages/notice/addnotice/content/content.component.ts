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
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      noticeBy: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      startDate: new FormControl('', [
        Validators.required
      ]),
      endDate: new FormControl('', [
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
