import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from 'shared/models/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName, email: user.email
    })
  }

  createContactInfo(userContactInfo){
    return this.db.list('/usercontactinfo').push(userContactInfo);
  }

  get(userId: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + userId);
  }

  getContactInfo(userId: string) {
    return this.db.object('/usercontactinfo/' + userId);
  }

  updateContactInfo(userId, userContactInfo){
    return this.db.object('/usercontactinfo/' + userId).update(userContactInfo);
  }
}