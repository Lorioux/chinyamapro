import { Component, OnInit } from '@angular/core';
import schedulelist from '../../../../../data/schedulelist.json';
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
    this.source = new LocalDataSource(schedulelist);
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
        title: 'Serial No.',
        filter: false
      },
      engineername: {
        title: 'Engineer Name',
        filter: false
      },
      departmentname: {
        title: 'Department Name',
        filter: false
      },
      day: {
        title: 'Day',
        filter: false
      },
      starttime: {
        title: 'Start Time',
        filter: false
      },
      endtime: {
        title: 'End Time',
        filter: false
      },
      status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (status: string) => {
          if(status === "Active"){
            return `<span class="badge badge-outline-success">${status}</span>`
          }
          else{
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
        field: 'engineername',
        search: query
      }, {
        field: 'departmentname',
        search: query
      }, {
        field: 'day',
        search: query
      }, {
        field: 'starttime',
        search: query
      }, {
        field: 'endtime',
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
