import { ComponentFixture, TestTask } from '@angular/core/testing';

import { GeneratereportComponent } from './generatereport.component';

describe('GeneratereportComponent', () => {
  let component: GeneratereportComponent;
  let fixture: ComponentFixture<GeneratereportComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ GeneratereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(GeneratereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
