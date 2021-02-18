import { Component, Input } from '@angular/core';
import { Notification } from '../../models/notification';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent {
  @Input('notification') notification: Notification;
}
