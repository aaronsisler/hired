export class Notification {
  $key: string;
  hasBeenViewed: boolean = false;

  constructor(public message: string, public hrefLocation: string, public dateAdded: string){}
}
