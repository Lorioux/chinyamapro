import { Component, OnInit } from '@angular/core';
import appointmentlist from '../../../../../data/appointmentlist.json';
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
    this.source = new LocalDataSource(appointmentlist);
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
        title: 'ID',
        filter: false
      },
      clientimg: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (clientimg: string) => {
          return `<img src="${clientimg}" alt="img" />`;
        },
        filter: false
      },
      clientname: {
        title: 'Client Name',
        filter: false
      },
      age: {
        title: 'Age',
        filter: false
      },
      engineername: {
        title: 'Engineer Name',
        filter: false
      },
      department: {
        title: 'Department',
        filter: false
      },
      date: {
        title: 'Date',
        filter: false
      },
      time: {
        title: 'Time',
        filter: false
      },
      issue: {
        title: 'Issue',
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
        field: 'clientname',
        search: query
      }, {
        field: 'age',
        search: query
      }, {
        field: 'engineername',
        search: query
      }, {
        field: 'department',
        search: query
      }, {
        field: 'date',
        search: query
      }, {
        field: 'time',
        search: query
      }, {
        field: 'issue',
        search: query
      }
    ], false);
  }

  ngOnInit(): void {
  }

}
