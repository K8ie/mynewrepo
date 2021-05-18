import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotPopUpComponent } from './chat-bot-pop-up.component';

describe('ChatBotPopUpComponent', () => {
  let component: ChatBotPopUpComponent;
  let fixture: ComponentFixture<ChatBotPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBotPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
