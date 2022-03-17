import { ComponentFixture, TestTask } from '@angular/core/testing';

import { DraggableComponent } from './draggable.component';

describe('DraggableComponent', () => {
  let component: DraggableComponent;
  let fixture: ComponentFixture<DraggableComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ DraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(DraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
