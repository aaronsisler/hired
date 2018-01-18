import { Component, OnInit, Input } from '@angular/core';
import { DocumentService } from 'shared/services/document.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {
  @Input('userId') userId: string;
  documentName: string;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  }

  uploadDocument(documentName: string) {
    this.documentService.uploadDocument(this.userId, this.documentName).then(() => this.documentName = "");
  }

}
