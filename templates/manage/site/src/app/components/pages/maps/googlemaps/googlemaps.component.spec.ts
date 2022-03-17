import { ComponentFixture, TestTask } from '@angular/core/testing';

import { GooglemapsComponent } from './googlemaps.component';

describe('GooglemapsComponent', () => {
  let component: GooglemapsComponent;
  let fixture: ComponentFixture<GooglemapsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ GooglemapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(GooglemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
