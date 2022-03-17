import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ChartjsComponent } from './chartjs.component';

describe('ChartjsComponent', () => {
  let component: ChartjsComponent;
  let fixture: ComponentFixture<ChartjsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ChartjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
