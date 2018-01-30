import { ApplicantNoteService } from 'applicant/services/applicant-note.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-applicant-note-upload',
  templateUrl: './applicant-note-upload.component.html',
  styleUrls: ['./applicant-note-upload.component.css']
})
export class ApplicantNoteUploadComponent {
  @Input('applicantId') applicantId: string;
  noteContent: string;

  constructor(private applicantNoteService: ApplicantNoteService) { }

  createApplicantNote() {
    //Stash a copy of the content and clear text area
    //There is a delay if you wait to update and THEN clear text area
    let noteContent = this.noteContent;
    this.noteContent = "";
    this.applicantNoteService.createApplicantNote(this.applicantId, noteContent);
  }
}
