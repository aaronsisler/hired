import { Component, Input } from '@angular/core';
import { Notification } from 'shared/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input('notification') notification: Notification;
  isHyperlink: boolean = true;

  constructor() { }

  markNotificationViewed() {
    this.isHyperlink = !this.isHyperlink;
    this.notification.hasBeenViewed = !this.notification.hasBeenViewed;
  }

}
