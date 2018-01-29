import { Applicant } from 'shared/models/applicant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-applicant-status',
  templateUrl: './applicant-status.component.html',
  styleUrls: ['./applicant-status.component.css']
})
export class ApplicantStatusComponent implements OnInit {
  @Input('positionId') positionId: string;
  @Input('applicant') applicant: Applicant;

  constructor() { }

  ngOnInit() {
  }

}
