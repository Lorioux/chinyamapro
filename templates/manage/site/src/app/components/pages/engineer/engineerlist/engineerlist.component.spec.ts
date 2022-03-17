import { ComponentFixture, TestTask } from '@angular/core/testing';

import { EngineerlistComponent } from './engineerlist.component';

describe('EngineerlistComponent', () => {
  let component: EngineerlistComponent;
  let fixture: ComponentFixture<EngineerlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ EngineerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(EngineerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
