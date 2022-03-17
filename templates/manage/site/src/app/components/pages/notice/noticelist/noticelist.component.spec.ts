import { ComponentFixture, TestTask } from '@angular/core/testing';

import { NoticelistComponent } from './noticelist.component';

describe('NoticelistComponent', () => {
  let component: NoticelistComponent;
  let fixture: ComponentFixture<NoticelistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ NoticelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(NoticelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
