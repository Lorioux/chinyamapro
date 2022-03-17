import { ComponentFixture, TestTask } from '@angular/core/testing';

import { FormelementsComponent } from './formelements.component';

describe('FormelementsComponent', () => {
  let component: FormelementsComponent;
  let fixture: ComponentFixture<FormelementsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ FormelementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(FormelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
