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
      clientName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      accountName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      paymentDate: new FormControl('', [
        Validators.required
      ]),
      totalAmount: new FormControl('', [
        Validators.required
      ]),
      paymentMode: new FormControl('', [
        Validators.required
      ]),
      paymentStatus: new FormControl('', [
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
