import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddnoticeComponent } from './addnotice.component';

describe('AddnoticeComponent', () => {
  let component: AddnoticeComponent;
  let fixture: ComponentFixture<AddnoticeComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
