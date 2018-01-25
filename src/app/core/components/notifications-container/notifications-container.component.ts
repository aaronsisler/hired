import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NotificationService } from 'shared/services/notification.service';
import { Notification } from 'shared/models/notification';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.css']
})
export class NotificationsContainerComponent implements OnInit, OnDestroy {
  @Input('userId') userId: string;
  isNotificationPopoutShown: boolean;
  notifications$;
  notifications: Notification[] = [];
  notificationSubscription: Subscription;
  unreviewedNotificationsCount: number;


  constructor(private notificationService: NotificationService) { }

  async ngOnInit() {
    this.notifications$ = await this.notificationService.getNotificationsForUser(this.userId);
    this.notificationSubscription = await this.notificationService.getNotificationsForUser(this.userId)
      .subscribe(x => {
        this.notifications = x;
        this.unreviewedNotificationsCount = this.notifications.filter(x => !x.hasBeenViewed).length;
      });
  }

  toggleNotificationPopout(){
    this.isNotificationPopoutShown = !this.isNotificationPopoutShown;
  }

  ngOnDestroy(){
    this.notificationSubscription.unsubscribe();
  }
}
