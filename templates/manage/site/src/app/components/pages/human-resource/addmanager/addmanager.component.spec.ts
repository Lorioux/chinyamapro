import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddmanagerComponent } from './addmanager.component';

describe('AddmanagerComponent', () => {
  let component: AddmanagerComponent;
  let fixture: ComponentFixture<AddmanagerComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
