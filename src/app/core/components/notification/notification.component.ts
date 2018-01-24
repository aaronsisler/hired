import { NotificationService } from 'shared/services/notification.service';
import { Component, Input } from '@angular/core';
import { Notification } from 'shared/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input('notification') notification: Notification;
  @Input('userId') userId: string;

  constructor(private notificationService: NotificationService) { }

  markNotificationViewed() {
    this.notification.hasBeenViewed = !this.notification.hasBeenViewed;
    this.notificationService.markNotificationAsReviewed(this.userId, this.notification);
  }

}
