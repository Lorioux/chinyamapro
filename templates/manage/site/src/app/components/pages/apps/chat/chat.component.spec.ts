import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
