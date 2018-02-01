import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotificationCreation } from 'shared/models/notification-creation';
import { Notification } from 'shared/models/notification';

@Injectable()
export class NotificationService {

  constructor(private db: AngularFireDatabase) { }

  getNotificationsForUser(userId: string) {
    return this.db.list('/notifications/' + userId);
  }

  markNotificationAsReviewed(userId: string, notification: Notification) {
    return this.db.object('/notifications/' + userId + '/' + notification.$key).update(notification);
  }

  async sendNewApplicationNotification(positionId: string) {
    let subLevel = ["ALL"];
    let notificationMessage = "Application received for Position: ";
    let hrefLocation = "/position-data/" + positionId;
    let positionWatchers$ = await this.getPositionWatchers();
    positionWatchers$.take(1)
      .subscribe(positionWatchersList => {
        let filteredList = this.getFilteredList(positionWatchersList, positionId, subLevel, notificationMessage, hrefLocation);
        this.createNotificationsFromFilteredList(filteredList);
      });
  }

  async sendApplicationStatusChangeNotification(positionId: string, applicantId: string) {
    let subLevel = ["ALL", "SOME"];
    let notificationMessage = "Applicant status changed for Position: ";
    let hrefLocation = "/applicant/" + positionId + '/' + applicantId;
    let positionWatchers$ = await this.getPositionWatchers();
    positionWatchers$.take(1)
      .subscribe(positionWatchersList => {
        let filteredList = this.getFilteredList(positionWatchersList, positionId, subLevel, notificationMessage, hrefLocation)
        this.createNotificationsFromFilteredList(filteredList);
      });
  }

  private createNotification(notificationCreation: NotificationCreation) {
    return this.db.list('/notifications/' + notificationCreation.userId).push({
      dateAdded: notificationCreation.dateAdded,
      hasBeenViewed: false,
      hrefLocation: notificationCreation.hrefLocation,
      message: notificationCreation.notificationMessage
    });
  }

  private getPositionWatchers() {
    return this.db.list('/position-watchers');
  }

  private getFilteredList(positionWatchersList: any[], positionId: string, subLevel: string[], notificationMessage: string, hrefLocation: string) {
    let listOfPositionWatcherInfo = [];
    let dateAdded: string = new Date().toLocaleString();

    positionWatchersList.forEach(record => {
      if (record[positionId] && subLevel.includes(record[positionId]["subscriptionLevel"])) {
        listOfPositionWatcherInfo.push(
          {
            userId: record.$key,
            positionId: record[positionId]["positionId"],
            positionKey: positionId,
            dateAdded: dateAdded,
            notificationMessage: notificationMessage,
            hrefLocation: hrefLocation
          })
      }
    });

    return listOfPositionWatcherInfo;
  }

  private createNotificationsFromFilteredList(filteredList: any[]) {
    filteredList.forEach(recordInfo => {
      const notification = new NotificationCreation(
        recordInfo.userId,
        recordInfo.positionKey,
        recordInfo.positionId,
        recordInfo.dateAdded,
        recordInfo.notificationMessage,
        recordInfo.hrefLocation);
      this.createNotification(notification);
    })
  }
}
