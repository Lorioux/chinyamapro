import { ComponentFixture, TestTask } from '@angular/core/testing';

import { VectormapsComponent } from './vectormaps.component';

describe('VectormapsComponent', () => {
  let component: VectormapsComponent;
  let fixture: ComponentFixture<VectormapsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ VectormapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(VectormapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
