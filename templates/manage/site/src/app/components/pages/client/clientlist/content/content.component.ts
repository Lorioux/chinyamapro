import { Component, OnInit } from '@angular/core';
import clientlist from '../../../../../data/clientlist.json';
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
    this.source = new LocalDataSource(clientlist);
  }
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      position: 'right'
    },
    edit: {
      editButtonContent: '<i class="fas fa-pencil-alt ms-text-primary"></i>',
      saveButtonContent: '<i class="fas fa-check ms-text-primary"></i>',
      cancelButtonContent: '<i class="fas fa-times ms-text-primary"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="far fa-trash-alt ms-text-danger"></i>',
      confirmDelete: true
    },
    columns: {
      img: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (img: string) => {
          return `<img src="${img}" alt="img" />`;
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
      }
    ], false);
  }

  ngOnInit(): void {
  }

}
