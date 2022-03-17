import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ModalregistertextComponent } from './modalregistertext.component';

describe('ModalregistertextComponent', () => {
  let component: ModalregistertextComponent;
  let fixture: ComponentFixture<ModalregistertextComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ModalregistertextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ModalregistertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
