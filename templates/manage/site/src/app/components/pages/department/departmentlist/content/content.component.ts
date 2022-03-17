import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import departmentlist from '../../../../../data/departmentlist.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // Total Departments
  public totalChartLabels: Label[] = ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"];
  public PieChartType: ChartType = 'pie';
  public totalChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Number of staffs according to deparments'
    }
  };
  public totalChartData: ChartDataSets[] = [
    {
      label: "Population (millions)",
      backgroundColor: ["#141433", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [2478, 5267, 734, 784, 433]
    }
  ];
  // Total Employees
  public employeeChartLabels: Label[] = ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"];
  public barChartType: ChartType = 'bar';
  public employeeChartOptions: ChartOptions = {
    responsive: true,
    legend: { display: false },
    title: {
      display: true,
      text: 'Maximum number of employes in departments'
    }
  };
  public employeeChartData: ChartDataSets[] = [
    {
      label: "Employes",
      backgroundColor: ["#141433", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [478, 1267, 1734, 2384, 133]
    }
  ];
  // Table
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(departmentlist);
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
      engineername: {
        title: 'Engineer Name',
        filter: false
      },
      departmentname: {
        title: 'Department Name',
        filter: false
      },
      departmenthead: {
        title: 'Department Head',
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
        field: 'engineername',
        search: query
      }, {
        field: 'departmentname',
        search: query
      }, {
        field: 'departmenthead',
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
