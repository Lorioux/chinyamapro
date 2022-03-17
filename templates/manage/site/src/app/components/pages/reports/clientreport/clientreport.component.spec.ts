import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ClientreportComponent } from './clientreport.component';

describe('ClientreportComponent', () => {
  let component: ClientreportComponent;
  let fixture: ComponentFixture<ClientreportComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ClientreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ClientreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
