import { ComponentFixture, TestTask } from '@angular/core/testing';

import { GooglechartsComponent } from './googlecharts.component';

describe('GooglechartsComponent', () => {
  let component: GooglechartsComponent;
  let fixture: ComponentFixture<GooglechartsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ GooglechartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(GooglechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
