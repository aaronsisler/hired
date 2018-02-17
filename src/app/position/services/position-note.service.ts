import { PositionNote } from 'shared/models/position-note';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PositionNoteService {

  constructor(private db: AngularFireDatabase) { }

  getAll(positionId: string) {
    return this.db.list('/position-notes/' + positionId, {
      query: {
        orderByPriority: true
      }
    });
  }

  create(positionId: string, noteContent: string) {
    let dateConstant = new Date();
    let positionNote = { positionId: positionId, note: noteContent, dateAdded: dateConstant.toLocaleString() };
    //Set Priority as negative getTime() since Firebase querying only does ascending currently
    return this.db.database.ref('/position-notes/' + positionId)
      .push().setWithPriority(positionNote, -(dateConstant.getTime()));
  }

  update(positionNote: PositionNote) {
    return this.db.object('/position-notes/' + positionNote.positionId + '/' + positionNote.$key).update(positionNote);
  }
}
