import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import totalreport from '../../../../../data/totalreport.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public totalreport = totalreport;
  // Line Chart
  public LineChartType: ChartType = 'line';
  // Hospitalreport
  public hospitalChartLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public hospitalChartOptions: ChartOptions = {
    elements: {
      line: {
        tension: 0
      }
    },
    tooltips: {
      titleFontColor: '#3a3952',
      bodyFontFamily: 'Roboto',
      backgroundColor: '#FFF',
      bodyFontColor: '#878793',
      bodyFontSize: 14,
      displayColors: false,
      bodySpacing: 10,
      intersect: false,
      bodyFontStyle: 'bold',
      xPadding: 15,
      yPadding: 15,
      mode: 'index'
    },
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 200,
          padding: 20
        },
        gridLines: {
          drawTicks: false,
          display: false
        }

      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          beginAtZero: true,
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "bold"
        }
      }]
    }
  };
  public hospitalChartData: ChartDataSets[] = [
    {
      label: "Engineers",
      borderColor: '#141433',
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#141433',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: "rgba(53,127,250,0.4)",
      borderWidth: 2,
      data: [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800]
    },
    {
      label: "Manager",
      borderColor: '#ec4e3f',
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#ec4e3f',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800]
    }
  ];
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
