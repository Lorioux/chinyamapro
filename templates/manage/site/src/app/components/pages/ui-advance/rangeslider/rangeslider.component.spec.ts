import { ComponentFixture, TestTask } from '@angular/core/testing';

import { RangesliderComponent } from './rangeslider.component';

describe('RangesliderComponent', () => {
  let component: RangesliderComponent;
  let fixture: ComponentFixture<RangesliderComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ RangesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(RangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
