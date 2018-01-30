import { Component, OnInit, Input } from '@angular/core';
import { ApplicantNote } from 'shared/models/applicant-note';

@Component({
  selector: 'app-applicant-note',
  templateUrl: './applicant-note.component.html',
  styleUrls: ['./applicant-note.component.css']
})
export class ApplicantNoteComponent implements OnInit {
  @Input('applicantNote') applicantNote: ApplicantNote;
  @Input('readonly') readonly: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
