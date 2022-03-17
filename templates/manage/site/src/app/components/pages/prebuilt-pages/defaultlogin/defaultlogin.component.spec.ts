import { ComponentFixture, TestTask } from '@angular/core/testing';

import { DefaultloginComponent } from './defaultlogin.component';

describe('DefaultloginComponent', () => {
  let component: DefaultloginComponent;
  let fixture: ComponentFixture<DefaultloginComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ DefaultloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(DefaultloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
