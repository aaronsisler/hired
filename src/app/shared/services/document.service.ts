import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Document } from 'shared/models/document';

@Injectable()
export class DocumentService {

  constructor(private db: AngularFireDatabase) { }

  getAllDocumentsForUser(userId: string) {
    return this.db.list('/documents/' + userId);
  }

  uploadDocument(userId: string, documentName: string) {
    return this.db.list('/documents/' + userId)
      .push(
      {
        name: documentName,
        dateUploaded: new Date().toLocaleString()
      });
  }
}
