import { Injectable } from '@angular/core';
import { Document } from 'shared/models/document'
import { AngularFireDatabase } from 'angularfire2/database';
import { AppUser } from 'shared/models/app-user';
import { Applicant } from 'shared/models/applicant';

@Injectable()
export class ApplicantService {

  constructor(private db: AngularFireDatabase) { }

  async submitApplication(positionId: string, user: AppUser, userDocuments: Document[]) {
    let applicationStatus: string = "APPLIED";
    let applicant = new Applicant(user, applicationStatus, userDocuments);
    let result = await this.db.list('/applicants/').push(applicant);
    return this.db.object('/applications/' + positionId + '/' + user.$key)
      .update({ applicantId: result.key, displayName: user.displayName, applicationStatus: applicationStatus })
  }

  async checkIfApplicationExistsForPosition(positionId: string, userId: string) {
    return this.db.object('/applications/' + positionId + '/' + userId);
  }

  getApplicantsForPosition(positionId: string) {
    return this.db.list('/applications/' + positionId);
  }
}
