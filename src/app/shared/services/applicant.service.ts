import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Document } from 'shared/models/document'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApplicantService {

  constructor(private db: AngularFireDatabase, private userService: UserService) { }

  submitApplication(positionId: string, userId: string, userDocuments: Document[]) {
    let userDocumentKeys: string[] = [];
    userDocuments.forEach(document => userDocumentKeys.push(document.$key));
    return this.db.object('/applications/' + positionId + '/' + userId)
      .update({ userDocumentKeys: userDocumentKeys });
  }

  async checkIfApplicationExistsForPosition(positionId: string, userId: string) {
    return this.db.object('/applications/' + positionId + '/' + userId);
  }

  getApplicantsForPosition(positionId: string) {
    return this.db.list('/applications/' + positionId);
  }

  getApplicantsForPositionUserInj(positionId: string) {

    return this.db.list('/applications/' + positionId)
      .map(userIds => this.getUsernames(userIds));
  }

  getUsernames(users) {
    let userInfoList = [];
    users.forEach(user => {
      this.userService.get(user.$key)
        .subscribe(userInfo => {
          if (userInfoList.find(x => x.userId == userInfo.$key)) {
            userInfoList.find(x => x.userId == userInfo.$key)["displayName"] = userInfo.displayName; return;
          }
          userInfoList.push({ userId: userInfo.$key, displayName: userInfo.displayName })
        })
    })

    return userInfoList;
  }
}
