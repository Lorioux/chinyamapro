import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ClientmanagementComponent } from './clientmanagement.component';

describe('ClientmanagementComponent', () => {
  let component: ClientmanagementComponent;
  let fixture: ComponentFixture<ClientmanagementComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ClientmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ClientmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
