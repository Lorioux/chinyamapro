import { ComponentFixture, TestTask } from '@angular/core/testing';

import { MaterializeComponent } from './materialize.component';

describe('MaterializeComponent', () => {
  let component: MaterializeComponent;
  let fixture: ComponentFixture<MaterializeComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ MaterializeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(MaterializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
