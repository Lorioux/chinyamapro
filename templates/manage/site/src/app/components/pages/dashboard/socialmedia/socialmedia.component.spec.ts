import { ComponentFixture, TestTask } from '@angular/core/testing';

import { SocialmediaComponent } from './socialmedia.component';

describe('SocialmediaComponent', () => {
  let component: SocialmediaComponent;
  let fixture: ComponentFixture<SocialmediaComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ SocialmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(SocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
