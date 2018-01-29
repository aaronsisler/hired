import { DocumentService } from 'shared/services/document.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-applicant-documents',
  templateUrl: './applicant-documents.component.html',
  styleUrls: ['./applicant-documents.component.css']
})
export class ApplicantDocumentsComponent implements OnInit {
  @Input('applicantId') applicantId: string;
  applicantDocuments$;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.applicantDocuments$ = this.documentService.getAllDocumentsForApplicant(this.applicantId);
  }

}
