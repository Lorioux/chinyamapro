import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddrepresentativeComponent } from './addrepresentative.component';

describe('AddrepresentativeComponent', () => {
  let component: AddrepresentativeComponent;
  let fixture: ComponentFixture<AddrepresentativeComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddrepresentativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddrepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
