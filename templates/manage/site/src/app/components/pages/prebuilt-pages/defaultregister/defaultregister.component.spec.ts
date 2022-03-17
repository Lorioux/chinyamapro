import { ComponentFixture, TestTask } from '@angular/core/testing';

import { DefaultregisterComponent } from './defaultregister.component';

describe('DefaultregisterComponent', () => {
  let component: DefaultregisterComponent;
  let fixture: ComponentFixture<DefaultregisterComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ DefaultregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(DefaultregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
