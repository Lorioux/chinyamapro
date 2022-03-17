import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ClientlistComponent } from './clientlist.component';

describe('ClientlistComponent', () => {
  let component: ClientlistComponent;
  let fixture: ComponentFixture<ClientlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ClientlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ClientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
