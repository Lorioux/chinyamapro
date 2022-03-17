import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ModalloginComponent } from './modallogin.component';

describe('ModalloginComponent', () => {
  let component: ModalloginComponent;
  let fixture: ComponentFixture<ModalloginComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ModalloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ModalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
