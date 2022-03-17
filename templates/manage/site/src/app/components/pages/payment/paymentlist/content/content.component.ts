import { Component, OnInit } from '@angular/core';
import paymentlist from '../../../../../data/paymentlist.json';
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
    this.source = new LocalDataSource(paymentlist);
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
      acname: {
        title: 'Client Name',
        filter: false
      },
      description: {
        title: 'Age',
        filter: false
      },
      type: {
        title: 'Engineer Name',
        filter: false
      },
      date: {
        title: 'Date',
        filter: false
      },
      amount: {
        title: 'Amount',
        type: 'html',
        valuePrepareFunction: (amount: number) => {
          return `${new Intl.NumberFormat().format((amount))}$`;
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
        field: 'acname',
        search: query
      }, {
        field: 'description',
        search: query
      }, {
        field: 'type',
        search: query
      }, {
        field: 'date',
        search: query
      }, {
        field: 'amount',
        search: query
      }
    ], false);
  }

  ngOnInit(): void {
  }

}
