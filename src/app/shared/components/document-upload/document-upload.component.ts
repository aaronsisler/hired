import { Component, Input, ViewChild } from '@angular/core';
import { DocumentService } from 'shared/services/document.service';

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

  fileChange(event) {
    this.file = event.target.files[0];
  }

  async uploadDocument() {
    this.documentService.uploadDocument(this.userId, this.file);
    this.fileNameVariable.nativeElement.value = "";
  }
}
