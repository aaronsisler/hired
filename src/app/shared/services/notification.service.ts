import { Notification } from 'shared/models/notification';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor(private db: AngularFireDatabase) { }

  getNotificationsForUser(userId: string) {
    return this.db.list('/notifications/' + userId);
  }

  markNotificationAsReviewed(userId: string, notification: Notification) {
    return this.db.object('/notifications/' + userId + '/' + notification.$key).update(notification);
  }

  createNotification(userId: string, dateAdded: string, notificationMessage: string) {
    let notification: Notification = new Notification(notificationMessage, dateAdded);
    return this.db.list('/notifications/' + userId).push(notification);
  }

  getFilteredList(positionWatchersList: any[], positionId: string) {
    let listOfUserIds = [];
    let dateAdded: string = new Date().toLocaleString();

    positionWatchersList.forEach(userRecord => {
      if (userRecord[positionId] && userRecord[positionId]["subscriptionLevel"] == "ALL") {
        listOfUserIds.push(userRecord.$key)
      }
    });

    listOfUserIds.forEach(userId => this.createNotification(userId, dateAdded, "Application for Position " + positionId + " created"))
  }

  async sendNewApplicationNotification(positionId: string) {
    let positionWatchers$ = await this.getPositionWatchers();
    positionWatchers$.take(1)
      .subscribe(positionWatchersList => this.getFilteredList(positionWatchersList, positionId));
  }

  getPositionWatchers() {
    return this.db.list('/position-watchers');
  }
}
