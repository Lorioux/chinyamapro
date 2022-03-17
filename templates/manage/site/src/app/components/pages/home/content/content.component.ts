import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // Notifications
  notificationblock = [
    {
      title: 'Engineers',
      count: 4567,
      icon: 'user-tie'
    },
    {
      title: 'Managers',
      count: 4567,
      icon: 'project-diagram'
    },
    {
      title: 'Clients',
      count: 4567,
      icon: 'user'
    },
    {
      title: 'Labors',
      count: 4567,
      icon: 'clipboard-list'
    },
  ];
  // Line Chart
  public InfographicsChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  public LineChartType: ChartType = 'line';
  public BarChartType: ChartType = 'bar';
  public InfographicsChartOptions: ChartOptions = {
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
  // Appointments
  public AppointmentsChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff4c01', 
      pointBorderColor: '#ff4c01',
      pointBackgroundColor: '#ff4c01',
      pointHoverBackgroundColor: '#ff4c01',
      pointHoverBorderColor: '#ff4c01',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "#ff986e",
      borderWidth: 2,
      data: [1, 4, 7, 3, 1, 7, 2, 5, 8, 3, 7, 5, 4, 3, 7]
    }
  ];
  // Client
  public ClientChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff4c01',
      pointBorderColor: '#ff4c01',
      pointBackgroundColor: '#ff4c01',
      pointHoverBackgroundColor: '#ff4c01',
      pointHoverBorderColor: '#ff4c01',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "#ff986e",
      borderWidth: 2,
      data: [5, 6, 8, 1, 5, 3, 9, 7, 5, 8, 7, 3, 6, 9, 1]
    }
  ];
  // Hospital
  public HospitalChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff4c01',
      pointBorderColor: '#ff4c01',
      pointBackgroundColor: '#ff4c01',
      pointHoverBackgroundColor: '#ff4c01',
      pointHoverBorderColor: '#ff4c01',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "#ff986e",
      borderWidth: 2,
      data: [1, 4, 7, 3, 5, 7, 6, 5, 8, 3, 5, 5, 4, 3, 7]
    }
  ];
  // Hospital Staff
  stafflist = [
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Anny',
      designation: 'Engineer'
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Jude',
      designation: 'Labour'
    },
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'Jordan',
      designation: 'Manager'
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Micheal',
      designation: 'Manager'
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Rough',
      designation: 'Engineer'
    },
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Lilly',
      designation: 'Labour'
    },
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'Sameul',
      designation: 'Manager'
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'Ricky',
      designation: 'Engineer'
    },
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Venus',
      designation: 'Engineer'
    },
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'Johan',
      designation: 'Manager'
    },
  ];
  staffSlider = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    arrows: true,
    prevArrow: '.prev-item',
    nextArrow: '.next-item',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  // Total Client
  public TotalClientChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public TotalClientChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
      position: "bottom"
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
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "bold"
        }
      }]
    }
  };
  public TotalClientChartData: ChartDataSets[] = [
    {
      label: "Client",
      borderColor: '#ff4c01',
      pointBorderColor: '#ff4c01',
      pointBackgroundColor: '#ff4c01',
      pointHoverBackgroundColor: '#ff4c01',
      pointHoverBorderColor: '#ff4c01',
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 2,
      fill: true,
      backgroundColor: "#ff986e",
      borderWidth: 1,
      data: [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600]
    }
  ];
  // Client In
  public ClientiInChartLabels: Label[] = ["1900", "1950", "1999", "2050"];
  public ClientiInChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Client In'
    }
  };
  public ClientiInChartData: ChartDataSets[] = [
    {
      label: "Add",
      backgroundColor: "#ff4c01",
      data: [133, 221, 783, 2478]
    }, {
      label: "Remove",
      backgroundColor: "#141433",
      data: [408, 547, 675, 734]
    }
  ];
  // Upcoming Appointments
  upcomingAppointment = [
    {
      clientimg: 'assets/img/dashboard/client-1.jpg',
      clientname: 'Bernardo Galaviz',
      engineername: 'Mr. Cristina Groves',
      date: '01 Dec 2021',
      time: '5:00 PM',
      phoneno: '+01-789-654-123',
      status: true,
    },
    {
      clientimg: 'assets/img/dashboard/client-5.jpg',
      clientname: 'Jenni',
      engineername: 'Mr. Richard Miles',
      date: '01 Dec 2021',
      time: '8:00 PM',
      phoneno: '+10-654-654-991',
      status: true,
    },
    {
      clientimg: 'assets/img/dashboard/client-6.jpg',
      clientname: 'John Doe',
      engineername: 'Mr. Andrew',
      date: '01 Dec 2021',
      time: '10:00 AM',
      phoneno: '+10-709-254-445',
      status: false,
    },
    {
      clientimg: 'assets/img/dashboard/client-8.jpg',
      clientname: 'Alesdro Guitto',
      engineername: 'Mr. Robert',
      date: '01 Dec 2021',
      time: '2:00 PM',
      phoneno: '+10-102-225-333',
      status: true,
    },
    {
      clientimg: 'assets/img/dashboard/client-1.jpg',
      clientname: 'Richard',
      engineername: 'Mr. Adwerd',
      date: '07 Dec 2021',
      time: '5:00 PM',
      phoneno: '+01-222-111-356',
      status: false,
    },
  ];
  // Engineer list
  engineerlist = [
    {
      img: 'assets/img/dashboard/Engineer-1.jpg',
      name: 'Micheal',
      designation: 'B.Tech',
      available: true,
    },
    {
      img: 'assets/img/dashboard/Engineer-2.jpg',
      name: 'Jennifer',
      designation: 'M.Tech',
      available: false,
    },
    {
      img: 'assets/img/dashboard/Engineer-3.jpg',
      name: 'Adwerd',
      designation: 'B.Tech',
      available: false,
    },
    {
      img: 'assets/img/dashboard/Engineer-4.jpg',
      name: 'John Doe',
      designation: 'M.Tech',
      available: true,
    },
    {
      img: 'assets/img/dashboard/Engineer-5.jpg',
      name: 'Jordan',
      designation: 'B.Tech',
      available: false,
    },
  ];
  // DOCTOR ENGAGEMENTS

  public engineerEngagementChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  public engineerEngagementChartOptions: ChartOptions = {
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
  // Weekday Engagement
  public weekdayEngagementChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff4c01',
      pointBorderColor: '#ff4c01',
      pointBackgroundColor: '#ff4c01',
      pointHoverBackgroundColor: '#ff4c01',
      pointHoverBorderColor: '#ff4c01',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "#ff986e",
      borderWidth: 2,
      data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
    }
  ];
  // Weekend Engagement
  public weekendEngagementChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff4c01',
      pointBorderColor: '#ff4c01',
      pointBackgroundColor: '#ff4c01',
      pointHoverBackgroundColor: '#ff4c01',
      pointHoverBorderColor: '#ff4c01',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "#ff986e",
      borderWidth: 2,
      data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
    }
  ];
  // New Client
  newclientlist = [
    {
      img: 'assets/img/dashboard/client-3.jpg',
      name: 'Richard',
      email: 'Richard288@example.com',
      phone: '+1-202-555-0875',
      issue: 'Salary'
    },
    {
      img: 'assets/img/dashboard/client-2.jpg',
      name: 'William',
      email: 'William434@example.com',
      phone: '+1-202-534-0112',
      issue: 'Salary'
    },
    {
      img: 'assets/img/dashboard/client-4.jpg',
      name: 'Jhone Deo',
      email: 'johndeo652@example.com',
      phone: '+1-202-182-0132',
      issue: 'Salary'
    },
    {
      img: 'assets/img/dashboard/client-5.jpg',
      name: 'Martin',
      email: 'Martin876@example.com',
      phone: '+1-202-998-2341',
      issue: 'Salary'
    },
    {
      img: 'assets/img/dashboard/client-1.jpg',
      name: 'Robert',
      email: 'Robert082@example.com',
      phone: '+1-202-455-1431',
      issue: 'Salary'
    },
  ];

  ngOnInit(): void {
  }

}
