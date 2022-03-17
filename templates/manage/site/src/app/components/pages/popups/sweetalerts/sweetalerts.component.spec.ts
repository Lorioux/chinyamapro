import { ComponentFixture, TestTask } from '@angular/core/testing';

import { SweetalertsComponent } from './sweetalerts.component';

describe('SweetalertsComponent', () => {
  let component: SweetalertsComponent;
  let fixture: ComponentFixture<SweetalertsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ SweetalertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(SweetalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
