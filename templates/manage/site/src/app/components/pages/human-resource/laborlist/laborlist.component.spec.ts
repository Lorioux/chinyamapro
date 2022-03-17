import { ComponentFixture, TestTask } from '@angular/core/testing';

import { LaborlistComponent } from './laborlist.component';

describe('LaborlistComponent', () => {
  let component: LaborlistComponent;
  let fixture: ComponentFixture<LaborlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ LaborlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(LaborlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
