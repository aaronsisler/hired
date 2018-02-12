import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Document } from 'shared/models/document';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class DocumentService {

  constructor(private db: AngularFireDatabase) { }

  getAllDocumentsForUser(userId: string) {
    return this.db.list('/documents/' + userId);
  }

  getAllDocumentsForApplicant(applicantId: string) {
    return this.db.list('/applicants/' + applicantId + '/applicationDocuments');
  }

  async uploadDocument(userId: string, file: File) {
    let downloadURL = await this.uploadDocumentToStorage(userId, file);
    return this.uploadDocumentToDatabase(userId, file.name, downloadURL);
  }

  private async uploadDocumentToStorage(userId: string, file: File) {
    let downloadURL: string;
    let storageRef = firebase.storage().ref(userId + "/" + file.name);
    await storageRef.put(file);
    await storageRef.getDownloadURL().then(url => downloadURL = url);
    return downloadURL;
  }

  private uploadDocumentToDatabase(userId: string, fileName: string, downloadURL: any) {
    return this.db.list('/documents/' + userId)
      .push(
      {
        fileName: fileName,
        downloadURL: downloadURL,
        dateUploaded: new Date().toLocaleString()
      });
  }

  async deleteUserDocuments(userId: string, documents: Document[]) {
    documents.forEach(document => this.deleteUserDocument(userId, document));
  }

  private async deleteUserDocument(userId: string, document: Document) {
    let storageRef = firebase.storage().ref(userId + "/" + document.fileName);
    await storageRef.delete();
    return this.db.object('/documents/' + userId + '/' + document.$key).remove();
  }
}
