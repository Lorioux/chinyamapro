import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddclientComponent } from './addclient.component';

describe('AddclientComponent', () => {
  let component: AddclientComponent;
  let fixture: ComponentFixture<AddclientComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
