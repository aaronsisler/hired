import { Document } from 'shared/models/document';
import { Component, Input } from '@angular/core';
import { DocumentService } from 'shared/services/document.service';

@Component({
  selector: 'app-admin-user-documents',
  templateUrl: './admin-user-documents.component.html',
  styleUrls: ['./admin-user-documents.component.css']
})
export class AdminUserDocumentsComponent {
  @Input('userId') userId: string;
  documentsSelected: Document[] = [];

  constructor(private documentService: DocumentService) { }

  documentSelectorTriggered(event) {
    this.documentsSelected = event;
  }

  deleteSelectedDocuments() {
    this.documentService.deleteUserDocuments(this.userId, this.documentsSelected);
    this.documentsSelected = [];
  }
}
