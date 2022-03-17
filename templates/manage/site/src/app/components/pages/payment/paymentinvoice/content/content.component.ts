import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  invoicelist = [
    {
      id: 1,
      servicename: 'Visting Charges',
      qty: 1,
      price: 100
    },
    {
      id: 2,
      servicename: 'Medicines',
      qty: 10,
      price: 69
    },
    {
      id: 3,
      servicename: 'X-ray Reports',
      qty: 4,
      price: 600
    },
    {
      id: 4,
      servicename: 'MRI',
      qty: 2,
      price: 245
    }
  ]
  public calculateprice() {
    return this.invoicelist.reduce((subtotal, item) => subtotal + item.qty * item.price, 0)
  };

  ngOnInit(): void {
  }

}
