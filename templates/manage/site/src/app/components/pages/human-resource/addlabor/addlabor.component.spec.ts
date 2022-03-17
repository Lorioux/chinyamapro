import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddlaborComponent } from './addlabor.component';

describe('AddlaborComponent', () => {
  let component: AddlaborComponent;
  let fixture: ComponentFixture<AddlaborComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddlaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddlaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
