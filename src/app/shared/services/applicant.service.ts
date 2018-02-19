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
    let applicant = { user: user, applicationStatus: applicationStatus, applicationDocuments: userDocuments };
    let result = await this.db.list('/applicants/').push(new Applicant({ ...applicant }));
    return this.db.object('/applications/' + positionId + '/' + user.userId)
      .update({ applicantId: result.key, displayName: user.displayName, applicationStatus: applicationStatus })
  }

  checkIfApplicationExistsForPosition(positionId: string, userId: string) {
    return this.db.object('/applications/' + positionId + '/' + userId);
  }

  getApplicantsForPosition(positionId: string) {
    return this.db.list('/applications/' + positionId);
  }

  getApplicant(applicantId: string) {
    return this.db.object('/applicants/' + applicantId);
  }

  updateApplicationStatus(applicant: Applicant, positionId: string) {
    var mergedApplicationStatus = {};
    mergedApplicationStatus['/applicants/' + applicant.$key + '/applicationStatus/'] = applicant.applicationStatus;
    mergedApplicationStatus['/applications/' + positionId + '/' + applicant.user.userId + '/applicationStatus'] = applicant.applicationStatus;

    var firebaseDatabaseRef = this.db.database.ref('/');
    return firebaseDatabaseRef.update(mergedApplicationStatus);
  }
}
