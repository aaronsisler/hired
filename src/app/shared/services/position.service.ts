import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PositionService {

  constructor(private db: AngularFireDatabase) { }

  create(position) {
    return this.db.list('/positions').push(position);
  }

  getAll() {
    return this.db.list('/positions');
  }

  get(postionId) {
    return this.db.object('/positions/' + postionId);
  }

  update(postionId, position) {
    return this.db.object('/positions/' + postionId).update(position);
  }

  delete(postionId) {
    return this.db.object('/positions/' + postionId).remove();
  }
}
