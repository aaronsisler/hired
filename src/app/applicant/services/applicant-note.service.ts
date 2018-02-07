import { ApplicantNote } from 'shared/models/applicant-note';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantNoteService {

  constructor(private db: AngularFireDatabase) { }

  getAll(applicantId: string) {
    return this.db.list('/applicant-notes/' + applicantId, {
      query: {
        orderByPriority: true
      }
    });
  }

  create(applicantId: string, noteContent: string) {
    let dateConstant = new Date();
    let applicantNote = { applicantId: applicantId, note: noteContent, dateAdded: dateConstant.toLocaleString() };
    //Set Priority as negative getTime() since Firebase querying only does ascending currently
    return this.db.database.ref('/applicant-notes/' + applicantId)
      .push().setWithPriority(applicantNote, -(dateConstant.getTime()));
  }

  update(applicantNote: ApplicantNote) {
    return this.db.object('/applicant-notes/' + applicantNote.applicantId + '/' + applicantNote.$key).update(applicantNote);
  }
}
