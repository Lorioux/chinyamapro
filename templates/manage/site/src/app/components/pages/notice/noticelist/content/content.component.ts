import { Component, OnInit } from '@angular/core';
import noticelist from '../../../../../data/noticelist.json';
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
    this.source = new LocalDataSource(noticelist);
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
        title: '#',
        filter: false
      },
      title: {
        title: 'Engineer Name',
        filter: false
      },
      description: {
        title: 'Description',
        filter: false
      },
      startdate: {
        title: 'Start Date',
        filter: false
      },
      enddate: {
        title: 'End Date',
        filter: false
      },
      assignby: {
        title: 'Assign By',
        filter: false
      },
      status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (status: string) => {
          if (status === "Active") {
            return `<span class="badge badge-outline-success">${status}</span>`
          }
          else {
            return `<span class="badge badge-outline-danger">${status}</span>`
          };
        },
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
        field: 'title',
        search: query
      }, {
        field: 'description',
        search: query
      }, {
        field: 'startdate',
        search: query
      }, {
        field: 'enddate',
        search: query
      }, {
        field: 'assignby',
        search: query
      }, {
        field: 'status',
        search: query
      }
    ], false);
  }

  ngOnInit(): void {
  }

}
