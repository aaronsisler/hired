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

  createNotification(userId: string, dateAdded: string, notificationMessage: string, hrefLocation: string) {
    let notification: Notification = new Notification(notificationMessage, hrefLocation, dateAdded);
    return this.db.list('/notifications/' + userId).push(notification);
  }

  getFilteredList(positionWatchersList: any[], positionId: string, subLevel: string, notificationMessage: string, hrefLocation: string) {
    let listOfUserIds = [];
    let dateAdded: string = new Date().toLocaleString();

    positionWatchersList.forEach(userRecord => {
      if (userRecord[positionId] && userRecord[positionId]["subscriptionLevel"] == "ALL") {
        listOfUserIds.push(userRecord.$key)
      }
    });

    listOfUserIds.forEach(userId => this.createNotification(userId, dateAdded, notificationMessage, hrefLocation))
  }

  async sendNewApplicationNotification(positionId: string) {
    let subLevel = "ALL";
    let notificationMessage = "Application for Position " + positionId + " created";
    let hrefLocation = "/position-data/" + positionId;
    let positionWatchers$ = await this.getPositionWatchers();
    positionWatchers$.take(1)
      .subscribe(positionWatchersList => this.getFilteredList(positionWatchersList, positionId, subLevel, notificationMessage, hrefLocation));
  }

  getPositionWatchers() {
    return this.db.list('/position-watchers');
  }
}
