import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Notification } from '../../models/notification';

import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
  });

  it('should render a notification with all its fields', () => {
    const notification: Notification = {
      id: 1,
      date: '2018-09-03T13:19:33.000Z',
      message: 'Message',
      read: false
    };

    component.notification = notification;
    
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.card-title'));

    expect(de.nativeElement.innerText).toContain(notification.message);
  });
});
