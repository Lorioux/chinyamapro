import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// Calender 
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { SchedulerModule } from 'angular-calendar-scheduler';
import { HomeService } from './home.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { CalenderComponent } from './calender/calender.component'

@NgModule({
  declarations: [HomeComponent, ContentComponent, CalenderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PerfectScrollbarModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    SlickCarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true })
  ],
  providers: [
    HomeService,
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class HomeModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
