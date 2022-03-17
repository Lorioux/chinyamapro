import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ModallogintextComponent } from './modallogintext.component';

describe('ModallogintextComponent', () => {
  let component: ModallogintextComponent;
  let fixture: ComponentFixture<ModallogintextComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ModallogintextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ModallogintextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
