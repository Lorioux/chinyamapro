import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ModalregisterComponent } from './modalregister.component';

describe('ModalregisterComponent', () => {
  let component: ModalregisterComponent;
  let fixture: ComponentFixture<ModalregisterComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ModalregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ModalregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
