import { Component, OnInit, Input } from '@angular/core';
import { ApplicantNoteService } from 'applicant/services/applicant-note.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-applicant-notes',
  templateUrl: './applicant-notes.component.html',
  styleUrls: ['./applicant-notes.component.css']
})
export class ApplicantNotesComponent implements OnInit {
  @Input('applicantId') applicantId: string;
  applicantNotes$;

  constructor(private applicantNoteService: ApplicantNoteService) { }

  ngOnInit() {
    this.applicantNotes$ = this.applicantNoteService.getApplicantNotes(this.applicantId);
  }
}
