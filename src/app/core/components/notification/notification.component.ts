import { Router } from '@angular/router';
import { NotificationService } from 'shared/services/notification.service';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Notification } from 'shared/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input('notification') notification: Notification;
  @Input('userId') userId: string;

  constructor(private notificationService: NotificationService, private router: Router) { }

  markNotificationViewed() {
    this.notification.hasBeenViewed = !this.notification.hasBeenViewed;
    this.notificationService.markNotificationAsReviewed(this.userId, this.notification);

    //Navigate to Home first given the ngOnInit issue discovered
    //when switching between the same component but different Ids
    this.router.navigateByUrl('/')
      .then(() => this.router.navigateByUrl(this.notification.hrefLocation))
  }
}
