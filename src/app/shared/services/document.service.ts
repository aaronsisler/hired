import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Document } from 'shared/models/document';

@Injectable()
export class DocumentService {

  constructor(private db: AngularFireDatabase) { }

  getAllDocumentsForUser(userId: string) {
    return this.db.list('/documents/' + userId);
  }

  getAllDocumentsForApplicant(applicantId: string){
    return this.db.list('/applicants/' + applicantId + '/applicationDocuments');
  }

  uploadDocument(userId: string, documentName: string, downloadURL: string) {
    return this.db.list('/documents/' + userId)
      .push(
      {
        fileName: documentName,
        downloadURL: downloadURL,
        dateUploaded: new Date().toLocaleString()
      });
  }
}
