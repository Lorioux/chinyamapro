import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Main
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" }},
  { path: 'animation', loadChildren: () => import('./components/pages/animations/animations.module').then(m => m.AnimationsModule), data: { breadcrumb: "Animations" } },
  { path: 'widgets', loadChildren: () => import('./components/pages/widgets/widgets.module').then(m => m.WidgetsModule), data: { breadcrumb: "Widgets" } },
  // appointment
  { path: 'appointment/add-appointment', loadChildren: () => import('./components/pages/appointment/addappointment/addappointment.module').then(m => m.AddappointmentModule), data: { breadcrumb: "Add Appointment" } },
  { path: 'appointment/appointment-list', loadChildren: () => import('./components/pages/appointment/appointmentlist/appointmentlist.module').then(m => m.AppointmentlistModule), data: { breadcrumb: "Appointment List" } },
  // apps
  { path: 'apps/chat', loadChildren: () => import('./components/pages/apps/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: "Chat" } },
  { path: 'apps/email', loadChildren: () => import('./components/pages/apps/email/email.module').then(m => m.EmailModule), data: { breadcrumb: "Email" } },
  { path: 'apps/to-do-list', loadChildren: () => import('./components/pages/apps/todolist/todolist.module').then(m => m.TodolistModule), data: { breadcrumb: "To-do List" } },
  // task manager
  { path: 'task-manager/add-task', loadChildren: () => import('./components/pages/task-manager/addtask/addtask.module').then(m => m.AddtaskModule), data: { breadcrumb: "Add Task" } },
  { path: 'task-manager/task-list', loadChildren: () => import('./components/pages/task-manager/tasklist/tasklist.module').then(m => m.TasklistModule), data: { breadcrumb: "Task List" } },
  // charts
  { path: 'charts/chartjs', loadChildren: () => import('./components/pages/charts/chartjs/chartjs.module').then(m => m.ChartjsModule), data: { breadcrumb: "Chart JS" } },
  { path: 'charts/google-charts', loadChildren: () => import('./components/pages/charts/googlecharts/googlecharts.module').then(m => m.GooglechartsModule), data: { breadcrumb: "Google Charts" } },
  // dashboard
  { path: 'dashboard/client-management', loadChildren: () => import('./components/pages/dashboard/clientmanagement/clientmanagement.module').then(m => m.ClientmanagementModule), data: { breadcrumb: "Client Management" } },
  { path: 'dashboard/project-management', loadChildren: () => import('./components/pages/dashboard/projectmanagement/projectmanagement.module').then(m => m.ProjectmanagementModule), data: { breadcrumb: "Project Management" } },
  { path: 'dashboard/social-media', loadChildren: () => import('./components/pages/dashboard/socialmedia/socialmedia.module').then(m => m.SocialmediaModule), data: { breadcrumb: "Social Media" } },
  { path: 'dashboard/web-analytics', loadChildren: () => import('./components/pages/dashboard/webanalytics/webanalytics.module').then(m => m.WebanalyticsModule), data: { breadcrumb: "Web Analytics" } },
  // department
  { path: 'department/add-department', loadChildren: () => import('./components/pages/department/adddepartment/adddepartment.module').then(m => m.AdddepartmentModule), data: { breadcrumb: "Add Department" } },
  { path: 'department/department-list', loadChildren: () => import('./components/pages/department/departmentlist/departmentlist.module').then(m => m.DepartmentlistModule), data: { breadcrumb: "Department List" } },
  // engineer
  { path: 'engineer/add-engineer', loadChildren: () => import('./components/pages/engineer/addengineer/addengineer.module').then(m => m.AddengineerModule), data: { breadcrumb: "Add Engineer" } },
  { path: 'engineer/engineer-list', loadChildren: () => import('./components/pages/engineer/engineerlist/engineerlist.module').then(m => m.EngineerlistModule), data: { breadcrumb: "Engineer List" } },
  // engineer schedule
  { path: 'engineer-schedule/add-schedule', loadChildren: () => import('./components/pages/engineer-schedule/addschedule/addschedule.module').then(m => m.AddscheduleModule), data: { breadcrumb: "Add Schedule" } },
  { path: 'engineer-schedule/schedule-list', loadChildren: () => import('./components/pages/engineer-schedule/schedulelist/schedulelist.module').then(m => m.SchedulelistModule), data: { breadcrumb: "Schedule List" } },
  // form
  { path: 'form/form-layout', loadChildren: () => import('./components/pages/form/formlayouts/formlayouts.module').then(m => m.FormlayoutsModule), data: { breadcrumb: "Form Layouts" } },
  { path: 'form/form-validation', loadChildren: () => import('./components/pages/form/formvalidation/formvalidation.module').then(m => m.FormvalidationModule), data: { breadcrumb: "Form Validation" } },
  { path: 'form/form-wizard', loadChildren: () => import('./components/pages/form/formwizard/formwizard.module').then(m => m.FormwizardModule), data: { breadcrumb: "Form Wizard" } },
  { path: 'form/form-elements', loadChildren: () => import('./components/pages/form/formelements/formelements.module').then(m => m.FormelementsModule), data: { breadcrumb: "Form Elements" } },
  // human resource
  { path: 'human-resource/add-employee', loadChildren: () => import('./components/pages/human-resource/addemployee/addemployee.module').then(m => m.AddemployeeModule), data: { breadcrumb: "Add Employee" } },
  { path: 'human-resource/add-manager', loadChildren: () => import('./components/pages/human-resource/addmanager/addmanager.module').then(m => m.AddmanagerModule), data: { breadcrumb: "Add Manager" } },
  { path: 'human-resource/add-labor', loadChildren: () => import('./components/pages/human-resource/addlabor/addlabor.module').then(m => m.AddlaborModule), data: { breadcrumb: "Add Labor" } },
  { path: 'human-resource/add-representative', loadChildren: () => import('./components/pages/human-resource/addrepresentative/addrepresentative.module').then(m => m.AddrepresentativeModule), data: { breadcrumb: "Add Representative" } },
  { path: 'human-resource/employee-list', loadChildren: () => import('./components/pages/human-resource/employeelist/employeelist.module').then(m => m.EmployeelistModule), data: { breadcrumb: "Employee List" } },
  { path: 'human-resource/manager-list', loadChildren: () => import('./components/pages/human-resource/managerlist/managerlist.module').then(m => m.ManagerlistModule), data: { breadcrumb: "Manager List" } },
  { path: 'human-resource/labor-list', loadChildren: () => import('./components/pages/human-resource/laborlist/laborlist.module').then(m => m.LaborlistModule), data: { breadcrumb: "Labor List" } },
  { path: 'human-resource/representative-list', loadChildren: () => import('./components/pages/human-resource/representativelist/representativelist.module').then(m => m.RepresentativelistModule), data: { breadcrumb: "Representative List" } },
  // icons
  { path: 'icons/flaticons', loadChildren: () => import('./components/pages/icons/flaticons/flaticons.module').then(m => m.FlaticonsModule), data: { breadcrumb: "Flaticons" } },
  { path: 'icons/fontawesome', loadChildren: () => import('./components/pages/icons/fontawesome/fontawesome.module').then(m => m.FontawesomeModule), data: { breadcrumb: "Fontawesome" } },
  { path: 'icons/materialize', loadChildren: () => import('./components/pages/icons/materialize/materialize.module').then(m => m.MaterializeModule), data: { breadcrumb: "Materialize" } },
  // maps
  { path: 'maps/google-maps', loadChildren: () => import('./components/pages/maps/googlemaps/googlemaps.module').then(m => m.GooglemapsModule), data: { breadcrumb: "Google Maps" } },
  { path: 'maps/vector-maps', loadChildren: () => import('./components/pages/maps/vectormaps/vectormaps.module').then(m => m.VectormapsModule), data: { breadcrumb: "Vector Maps" } },
  // notice
  { path: 'notice/add-notice', loadChildren: () => import('./components/pages/notice/addnotice/addnotice.module').then(m => m.AddnoticeModule), data: { breadcrumb: "Add Notice" } },
  { path: 'notice/notice-list', loadChildren: () => import('./components/pages/notice/noticelist/noticelist.module').then(m => m.NoticelistModule), data: { breadcrumb: "Notice  List" } },
  // client
  { path: 'client/add-client', loadChildren: () => import('./components/pages/client/addclient/addclient.module').then(m => m.AddclientModule), data: { breadcrumb: "Add Client" } },
  { path: 'client/client-list', loadChildren: () => import('./components/pages/client/clientlist/clientlist.module').then(m => m.ClientlistModule), data: { breadcrumb: "Client List" } },
  // payment
  { path: 'payment/add-payment', loadChildren: () => import('./components/pages/payment/addpayment/addpayment.module').then(m => m.AddpaymentModule), data: { breadcrumb: "Add Payment" } },
  { path: 'payment/payment-list', loadChildren: () => import('./components/pages/payment/paymentlist/paymentlist.module').then(m => m.PaymentlistModule), data: { breadcrumb: "Payment List" } },
  { path: 'payment/payment-invoice', loadChildren: () => import('./components/pages/payment/paymentinvoice/paymentinvoice.module').then(m => m.PaymentinvoiceModule), data: { breadcrumb: "Payment Invoice" } },
  // popups
  { path: 'popups/sweet-alerts', loadChildren: () => import('./components/pages/popups/sweetalerts/sweetalerts.module').then(m => m.SweetalertsModule), data: { breadcrumb: "Sweet Alerts" } },
  { path: 'popups/toast', loadChildren: () => import('./components/pages/popups/toast/toast.module').then(m => m.ToastModule), data: { breadcrumb: "Toast" } },
  // prebuilt pages
  { path: 'prebuilt-pages/coming-soon', loadChildren: () => import('./components/pages/prebuilt-pages/comingsoon/comingsoon.module').then(m => m.ComingsoonModule), data: { breadcrumb: "Coming Soon" } },
  { path: 'prebuilt-pages/default-login', loadChildren: () => import('./components/pages/prebuilt-pages/defaultlogin/defaultlogin.module').then(m => m.DefaultloginModule), data: { breadcrumb: "Default Login" } },
  { path: 'prebuilt-pages/default-register', loadChildren: () => import('./components/pages/prebuilt-pages/defaultregister/defaultregister.module').then(m => m.DefaultregisterModule), data: { breadcrumb: "Default Register" } },
  { path: 'prebuilt-pages/error', loadChildren: () => import('./components/pages/prebuilt-pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: "Error 404" } },
  { path: 'prebuilt-pages/faq', loadChildren: () => import('./components/pages/prebuilt-pages/faq/faq.module').then(m => m.FaqModule), data: { breadcrumb: "FAQ's" } },
  { path: 'prebuilt-pages/invoice', loadChildren: () => import('./components/pages/prebuilt-pages/invoice/invoice.module').then(m => m.InvoiceModule), data: { breadcrumb: "Invoice" } },
  { path: 'prebuilt-pages/lock-screen', loadChildren: () => import('./components/pages/prebuilt-pages/lockscreen/lockscreen.module').then(m => m.LockscreenModule), data: { breadcrumb: "Lockscreen" } },
  { path: 'prebuilt-pages/modal-login', loadChildren: () => import('./components/pages/prebuilt-pages/modallogin/modallogin.module').then(m => m.ModalloginModule), data: { breadcrumb: "Modal Login" } },
  { path: 'prebuilt-pages/modal-register', loadChildren: () => import('./components/pages/prebuilt-pages/modalregister/modalregister.module').then(m => m.ModalregisterModule), data: { breadcrumb: "Modal Register" } },
  { path: 'prebuilt-pages/portfolio', loadChildren: () => import('./components/pages/prebuilt-pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: "Portfolio" } },
  { path: 'prebuilt-pages/user-profile', loadChildren: () => import('./components/pages/prebuilt-pages/userprofile/userprofile.module').then(m => m.UserprofileModule), data: { breadcrumb: "User Profile" } },
  // reports
  { path: 'report/engineer-report', loadChildren: () => import('./components/pages/reports/engineerreport/engineerreport.module').then(m => m.EngineerreportModule), data: { breadcrumb: "Engineer Report" } },
  { path: 'report/client-report', loadChildren: () => import('./components/pages/reports/clientreport/clientreport.module').then(m => m.ClientreportModule), data: { breadcrumb: "Client Report" } },
  { path: 'report/total-report', loadChildren: () => import('./components/pages/reports/totalreport/totalreport.module').then(m => m.TotalreportModule), data: { breadcrumb: "Total Report" } },
  // tables
  { path: 'tables/basic-tables', loadChildren: () => import('./components/pages/tables/basictables/basictables.module').then(m => m.BasictablesModule), data: { breadcrumb: "Basic Tables" } },
  { path: 'tables/data-tables', loadChildren: () => import('./components/pages/tables/datatables/datatables.module').then(m => m.DatatablesModule), data: { breadcrumb: "Data Tables" } },
  // ui-advance
  { path: 'ui-advance/cropper', loadChildren: () => import('./components/pages/ui-advance/cropper/cropper.module').then(m => m.CropperModule), data: { breadcrumb: "Cropper Js" } },
  { path: 'ui-advance/draggables', loadChildren: () => import('./components/pages/ui-advance/draggable/draggable.module').then(m => m.DraggableModule), data: { breadcrumb: "Draggable" } },
  { path: 'ui-advance/modals', loadChildren: () => import('./components/pages/ui-advance/modals/modals.module').then(m => m.ModalsModule), data: { breadcrumb: "Modals" } },
  { path: 'ui-advance/range-slider', loadChildren: () => import('./components/pages/ui-advance/rangeslider/rangeslider.module').then(m => m.RangesliderModule), data: { breadcrumb: "Range Slider" } },
  { path: 'ui-advance/rating', loadChildren: () => import('./components/pages/ui-advance/ratings/ratings.module').then(m => m.RatingsModule), data: { breadcrumb: "Ratings" } },
  { path: 'ui-advance/sliders', loadChildren: () => import('./components/pages/ui-advance/sliders/sliders.module').then(m => m.SlidersModule), data: { breadcrumb: "Sliders" } },
  { path: 'ui-advance/tour', loadChildren: () => import('./components/pages/ui-advance/tour/tour.module').then(m => m.TourModule), data: { breadcrumb: "Tour" } },
  // ui-basic
  { path: 'ui-basic/accordions', loadChildren: () => import('./components/pages/ui-basic/accordions/accordions.module').then(m => m.AccordionsModule), data: { breadcrumb: "Accordions" } },
  { path: 'ui-basic/alerts', loadChildren: () => import('./components/pages/ui-basic/alerts/alerts.module').then(m => m.AlertsModule), data: { breadcrumb: "Alerts" } },
  { path: 'ui-basic/badges', loadChildren: () => import('./components/pages/ui-basic/badges/badges.module').then(m => m.BadgesModule), data: { breadcrumb: "Badges" } },
  { path: 'ui-basic/breadcrumbs', loadChildren: () => import('./components/pages/ui-basic/breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule), data: { breadcrumb: "Breadcrumbs" } },
  { path: 'ui-basic/buttons', loadChildren: () => import('./components/pages/ui-basic/buttons/buttons.module').then(m => m.ButtonsModule), data: { breadcrumb: "Buttons" } },
  { path: 'ui-basic/cards', loadChildren: () => import('./components/pages/ui-basic/cards/cards.module').then(m => m.CardsModule), data: { breadcrumb: "Cards" } },
  { path: 'ui-basic/pagination', loadChildren: () => import('./components/pages/ui-basic/pagination/pagination.module').then(m => m.PaginationModule), data: { breadcrumb: "Pagination" } },
  { path: 'ui-basic/preloader', loadChildren: () => import('./components/pages/ui-basic/preloader/preloader.module').then(m => m.PreloaderModule), data: { breadcrumb: "Preloader" } },
  { path: 'ui-basic/progress-bars', loadChildren: () => import('./components/pages/ui-basic/progressbars/progressbars.module').then(m => m.ProgressbarsModule), data: { breadcrumb: "Progress Bars" } },
  { path: 'ui-basic/tabs', loadChildren: () => import('./components/pages/ui-basic/tabs/tabs.module').then(m => m.TabsModule), data: { breadcrumb: "Tabs" } },
  { path: 'ui-basic/typography', loadChildren: () => import('./components/pages/ui-basic/typography/typography.module').then(m => m.TypographyModule), data: { breadcrumb: "Typography" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
