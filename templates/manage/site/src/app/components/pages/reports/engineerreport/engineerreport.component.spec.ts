import { ComponentFixture, TestTask } from '@angular/core/testing';

import { EngineerreportComponent } from './engineerreport.component';

describe('EngineerreportComponent', () => {
  let component: EngineerreportComponent;
  let fixture: ComponentFixture<EngineerreportComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ EngineerreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(EngineerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
