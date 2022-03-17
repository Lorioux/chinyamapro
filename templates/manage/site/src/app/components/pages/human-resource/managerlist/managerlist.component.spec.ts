import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ManagerlistComponent } from './managerlist.component';

describe('ManagerlistComponent', () => {
  let component: ManagerlistComponent;
  let fixture: ComponentFixture<ManagerlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ManagerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ManagerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
