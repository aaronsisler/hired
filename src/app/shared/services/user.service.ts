import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from 'shared/models/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  get(userId: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + userId);
  }

  getAll(){
    return this.db.list('/users');
  }

  update(userId, user: AppUser){
    return this.db.object('/users/' + userId).update(user);
  }
}
