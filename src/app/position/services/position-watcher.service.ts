import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { PositionWatcher } from 'shared/models/position-watcher';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PositionWatcherService {

  constructor(private db: AngularFireDatabase) { }

  getAll(userId: string): Observable<PositionWatcher> {
    return this.db.object('/position-watchers/' + userId).map(x => new PositionWatcher(x.positions));
  }

  getPosition(userId: string, key: string) {
    return this.db.object('position-watchers/' + userId + '/positions/' + key);
  }

  updateSubscriptionLevel(userId: string, key: string, level: string) {
    let position$ = this.getPosition(userId, key);
    position$.update({ subscriptionLevel: level });
  }
}