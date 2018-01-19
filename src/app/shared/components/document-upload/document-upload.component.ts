import { Component, Input, ViewChild } from '@angular/core';
import { DocumentService } from 'shared/services/document.service';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
  @Input('userId') userId: string;
  @ViewChild('fileName') fileNameVariable: any;
  file: File;

  constructor(private documentService: DocumentService) { }

  fileChange(event){
    this.file = event.target.files[0];
  }

  async uploadDocument() {
    let downloadURL: string;
    let storageRef = firebase.storage().ref(this.userId + "/" + this.file.name);
    await storageRef.put(this.file);
    await storageRef.getDownloadURL().then(url=> downloadURL = url);
    this.documentService.uploadDocument(this.userId, this.file.name, downloadURL);
    this.fileNameVariable.nativeElement.value = "";
  }

}
