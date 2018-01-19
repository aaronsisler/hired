import { AuthService } from 'shared/services/auth.service';
import { DocumentUploadComponent } from 'shared/components/document-upload/document-upload.component';
import { DocumentService } from 'shared/services/document.service';
import { Document } from 'shared/models/document';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @Input('userId') userId: string;
  documents$;

  constructor(private documentService: DocumentService) {
  }

  async ngOnInit() {
    this.documents$ = await this.documentService.getAllDocumentsForUser(this.userId);
  }
}
