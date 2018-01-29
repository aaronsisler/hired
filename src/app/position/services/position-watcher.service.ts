import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { PositionWatcher } from 'shared/models/position-watcher';
import { PositionWatched } from 'shared/models/position-watched';

@Injectable()
export class PositionWatcherService {

  constructor(private db: AngularFireDatabase) { }

  getAll(userId: string) {
    return this.db.list('/position-watchers/' + userId);
  }

  getPosition(userId: string, key: string): FirebaseObjectObservable<PositionWatched> {
    return this.db.object('position-watchers/' + userId + '/' + key);
  }

  updateSubscriptionLevel(userId: string, key: string, subscriptionLevel: string) {
    let position$ = this.getPosition(userId, key);
    if (subscriptionLevel == "NONE") {
      return position$.remove();
    }
    return position$.update({ subscriptionLevel: subscriptionLevel });
  }
}
