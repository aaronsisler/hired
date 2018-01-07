import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { PositionWatcher } from 'shared/models/position-watcher';
import { Observable } from 'rxjs/Observable';
import { PositionWatched } from 'shared/models/position-watched';

@Injectable()
export class PositionWatcherService {

  constructor(private db: AngularFireDatabase) { }

  getAll(userId: string): Observable<PositionWatcher> {
    return this.db.object('/position-watchers/' + userId).map(x => new PositionWatcher(x.positions));
  }

  getPosition(userId: string, key: string): FirebaseObjectObservable<PositionWatched> {
    return this.db.object('position-watchers/' + userId + '/positions/' + key);
  }

  updateSubscriptionLevel(userId: string, key: string, level: string) {
    let position$ = this.getPosition(userId, key);
    return position$.update({ subscriptionLevel: level });
  }
}