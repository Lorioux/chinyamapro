import { ComponentFixture, TestTask } from '@angular/core/testing';

import { TotalreportComponent } from './totalreport.component';

describe('TotalreportComponent', () => {
  let component: TotalreportComponent;
  let fixture: ComponentFixture<TotalreportComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ TotalreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(TotalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
