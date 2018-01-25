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

  logTheThing(thing: string) {
    console.log("User Id:", thing);
  }

  getFilteredList(positionWatchersList: any[], positionId: string) {
    let listOfUserIds = [];
    positionWatchersList.forEach(userRecord => {
      if (userRecord[positionId] == "ALL") {
        listOfUserIds.push(userRecord.$key)
      }
    });
    console.log("List of UserIds", listOfUserIds);
    listOfUserIds.forEach(userId => this.logTheThing(userId))
    return listOfUserIds;
  }

  sendNewApplicationNotification(positionId: string) {
    return this.getPositionWatchersList().switchMap(positionWatchersList => this.getFilteredList(positionWatchersList, positionId));
  }

  getPositionWatchersList() {
    return this.db.list('/position-watchers');
  }
}
