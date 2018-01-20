import { AuthService } from 'shared/services/auth.service';
import { DocumentUploadComponent } from 'shared/components/document-upload/document-upload.component';
import { DocumentService } from 'shared/services/document.service';
import { Document } from 'shared/models/document';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @Input('userId') userId: string;
  @Input('documentsSelected') documentsSelected: Document[];
  @Output('documentsOutput') documentsOutput: EventEmitter<Document[]> = new EventEmitter<Document[]>();
  isPositionApply: boolean;
  documents$;

  constructor(private documentService: DocumentService) {
  }

  async ngOnInit() {
    this.isCheckboxColumnEnabled();
    this.documents$ = await this.documentService.getAllDocumentsForUser(this.userId);
  }

  isCheckboxChecked(documentInput) {
    if (this.isDocumentInArray(documentInput)) {
      return true;
    }
    return false;
  }

  onChange(document) {
    this.updateDocumentsSelected(document);
    this.documentsOutput.emit(this.documentsSelected);
  }

  updateDocumentsSelected(documentInput: Document) {
    if (this.isDocumentInArray(documentInput)) {
      this.documentsSelected = this.documentsSelected.filter(document => document.$key !== documentInput.$key)
      return;
    }
    this.documentsSelected.push(documentInput);
  }

  isCheckboxColumnEnabled() {
    if (this.documentsSelected) {
      this.isPositionApply = true;
      return;
    }
    this.documentsSelected = [];
  }

  isDocumentInArray(documentInput) {
    if (this.documentsSelected.find(document => (document.$key === documentInput.$key))) {
      return true;
    }
    return false;
  }
}
