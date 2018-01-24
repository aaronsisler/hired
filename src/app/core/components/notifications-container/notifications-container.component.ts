import { Component, OnInit } from '@angular/core';
import { Notification } from 'shared/models/notification';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.css']
})
export class NotificationsContainerComponent implements OnInit {
  yesPlease: boolean = true;
  expanded: boolean = true;
  anotherBool: boolean = false;
  notifications: Notification[] = [];

  constructor() { }

  ngOnInit() {
    this.notifications.push({ hasBeenViewed: true, dateAdded: "2018/01/24 10:01:01", message: "This is notification 1" });
    this.notifications.push({ hasBeenViewed: false, dateAdded: "2018/02/24 10:02:02", message: "This is notification 2" });
    this.notifications.push({ hasBeenViewed: true, dateAdded: "2018/03/24 10:03:03", message: "This is notification 3" });
  }

  changeTheBoolean(){
    this.anotherBool = !this.anotherBool;
  }

}
