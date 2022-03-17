import { Component, OnInit } from '@angular/core';
import representativelist from '../../../../../data/representativelist.json';
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
    this.source = new LocalDataSource(representativelist);
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
      id: {
        title: 'S. No.',
        filter: false
      },
      img: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (img: string) => {
          return `<img src="${img}" alt="img" />`;
        },
        filter: false
      },
      name: {
        title: 'Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      address: {
        title: 'Address',
        filter: false
      },
      mobile: {
        title: 'Mobile',
        filter: false
      },
      joindate: {
        title: 'Joining Date',
        filter: false
      }
    }
  };
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      }, {
        field: 'name',
        search: query
      }, {
        field: 'email',
        search: query
      }, {
        field: 'address',
        search: query
      }, {
        field: 'mobile',
        search: query
      }, {
        field: 'joindate',
        search: query
      }
    ], false);
  }

  ngOnInit(): void {
  }

}
