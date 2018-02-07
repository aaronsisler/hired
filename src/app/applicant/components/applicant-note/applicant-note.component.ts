import { Component, Input } from '@angular/core';
import { ApplicantNote } from 'shared/models/applicant-note';
import { ApplicantNoteService } from 'applicant/services/applicant-note.service';

@Component({
  selector: 'app-applicant-note',
  templateUrl: './applicant-note.component.html',
  styleUrls: ['./applicant-note.component.css']
})
export class ApplicantNoteComponent {
  @Input('applicantNote') applicantNote: ApplicantNote;
  @Input('readonly') readonly: boolean = true;

  constructor(private applicantNoteService: ApplicantNoteService) { }

  unlockNote() {
    this.readonly = false;
  }

  updateNote() {
    this.readonly = true;
    this.applicantNoteService.update(this.applicantNote);
  }
}
