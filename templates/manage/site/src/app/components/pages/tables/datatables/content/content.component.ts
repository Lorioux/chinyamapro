import { Component, OnInit } from '@angular/core';
import datatable from '../../../../../data/datatable.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // Table
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(datatable);
  }
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      img: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (img: number) => {
          return `<img src="${img}" alt="img"/>`;
        },
        filter: false
      },
      clientname: {
        title: 'Name',
        filter: false
      },
      address: {
        title: 'Address',
        filter: false
      },
      issue: {
        title: 'Issue',
        filter: false
      },
      age: {
        title: 'Age',
        filter: false
      },
      phone: {
        title: 'Phone',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    }
  };
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'clientname',
        search: query
      }, {
        field: 'address',
        search: query
      }, {
        field: 'issue',
        search: query
      }, {
        field: 'age',
        search: query
      }, {
        field: 'phone',
        search: query
      }, {
        field: 'email',
        search: query
      },
    ], false);
  }

  ngOnInit(): void {
  }

}
