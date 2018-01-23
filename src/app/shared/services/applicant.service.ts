import { Injectable } from '@angular/core';
import { Document } from 'shared/models/document'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ApplicantService {

  constructor(private db: AngularFireDatabase) { }

  submitApplication(positionId: string, userId: string, userDocuments: Document[]) {
    let userDocumentKeys: string[] = [];
    userDocuments.forEach(document => userDocumentKeys.push(document.$key));
    return this.db.object('/applications/' + positionId + '/' + userId)
      .update({ userDocumentKeys: userDocumentKeys });
  }

  async checkIfApplicationExistsForPosition(positionId: string, userId: string) {
    return this.db.object('/applications/' + positionId + '/' + userId);
  }
}
