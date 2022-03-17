import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import engineerreport from '../../../../../data/engineerreport.json'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public engineerreport = engineerreport;
  // Line Chart
  public LineChartType: ChartType = 'line';
  // Hospital confrence
  public trend_1 = [1, 3, 5, 4, 3, 3, 4, 8, 5];
  public trend_2 = [3, 2, 5, 4, 8, 4, 5, 2, 3];
  public trend_3 = [7, 5, 4, 5, 4, 7, 5, 5, 4];
  public trend_4 = [3, 3, 4, 6, 7, 6, 6, 4, 3];
  public trend_5 = [5, 4, 6, 7, 6, 5, 5, 7, 4];

  public confrenceChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public confrenceChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
      position: "bottom"
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        display: false,
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  // Trendone
  public trendoneChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: this.trend_1
    }
  ];
  // Trendtwo
  public trendtwoChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: this.trend_2
    }
  ];
  // Trendthree
  public trendthreeChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: this.trend_3
    }
  ];
  // Trendfour
  public trendfourChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: this.trend_4
    }
  ];
  // Trendfive
  public trendfiveChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: this.trend_5
    }
  ];
  // management
  managementbar = [
    {
      title: 'OPD',
      percent: 25
    },
    {
      title: 'NEW PATIENT',
      percent: 50
    },
    {
      title: 'LABORATORY TEST',
      percent: 75
    },
    {
      title: 'TREATMENT',
      percent: 100
    },
    {
      title: 'DISCHARGE',
      percent: 75
    },
  ];
  // Hospital Info
  hospitalinfolist = [
    {
      headname: 'Daniel',
      departmentname: 'Dental',
      otherstaff: 20,
      impression: 17.24,
      status: true,
    },
    {
      headname: 'Jenni',
      departmentname: 'Medicine',
      otherstaff: 28,
      impression: 12.24,
      status: false,
    },
    {
      headname: 'Elly',
      departmentname: 'Gynaecology',
      otherstaff: 12,
      impression: 32.04,
      status: true,
    },
    {
      headname: 'Jacob',
      departmentname: 'Cardiology',
      otherstaff: 9,
      impression: 20.75,
      status: false,
    },
    {
      headname: 'Richard',
      departmentname: 'V.D.',
      otherstaff: 10,
      impression: 13.38,
      status: true,
    }, {
      headname: 'Nick',
      departmentname: 'Infectious issue',
      otherstaff: 10,
      impression: 13.38,
      status: true,
    },
    {
      headname: 'Jennifer',
      departmentname: 'Surgery',
      otherstaff: 10,
      impression: 13.38,
      status: true,
    },
    {
      headname: 'Robert',
      departmentname: 'Plastic surgery',
      otherstaff: 10,
      impression: 13.38,
      status: true,
    },
    {
      headname: 'William',
      departmentname: 'Orthopaedics',
      otherstaff: 10,
      impression: 13.38,
      status: true,
    }
  ];
  // Analytics
  public analyticsChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  public analyticsChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false,
      position: "bottom"
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        display: false,
      }]
    }
  };
  // VIP Rooms (Avg)
  public viproomChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
    }
  ];
  // General Rooms (Avg)
  public generalroomChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      pointBorderColor: '#ec4e3f',
      pointBackgroundColor: '#ec4e3f',
      pointHoverBackgroundColor: '#ec4e3f',
      pointHoverBorderColor: '#ec4e3f',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
    }
  ];
  // Engineers
  public engineersChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      pointBorderColor: '#ec4e3f',
      pointBackgroundColor: '#ec4e3f',
      pointHoverBackgroundColor: '#ec4e3f',
      pointHoverBorderColor: '#ec4e3f',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [1, 6, 3, 8, 3, 4, 5, 1, 8, 5, 8, 4, 2, 4, 6, 8, 5, 3, 7, 5, 8]
    }
  ];
  // Managers (Avg)
  public managersChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
    }
  ];
  // Client Facilities (Avg)
  public clientChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
    }
  ];

  ngOnInit(): void {
  }

}
