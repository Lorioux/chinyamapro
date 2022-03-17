import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddengineerComponent } from './addengineer.component';

describe('AddengineerComponent', () => {
  let component: AddengineerComponent;
  let fixture: ComponentFixture<AddengineerComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
