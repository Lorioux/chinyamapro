import { ComponentFixture, TestTask } from '@angular/core/testing';

import { RepresentativelistComponent } from './representativelist.component';

describe('RepresentativelistComponent', () => {
  let component: RepresentativelistComponent;
  let fixture: ComponentFixture<RepresentativelistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ RepresentativelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(RepresentativelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
