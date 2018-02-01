export class NotificationCreation {

  constructor(
    public userId: string,
    public positionKey: string,
    public positionId: string,
    public dateAdded: string,
    public notificationMessage: string,
    public hrefLocation: string) {

    this.notificationMessage = this.notificationMessage + this.positionId
  }
}
