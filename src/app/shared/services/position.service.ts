import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Position } from 'shared/models/position';

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

  getAllPositionIds(): Observable<string[]> {
    let positionIds: string[] = [];
    return this.getAll().map(positions => {
      positionIds = [];
      positions.forEach(position => positionIds.push(position.positionId))
      return positionIds;
    });
  }

  update(position: Position) {
    return this.db.object('/positions/' + position.$key).update(position);
  }
}
