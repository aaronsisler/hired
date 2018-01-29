import { Component, Input, OnInit } from '@angular/core';
import { ApplicantService } from 'shared/services/applicant.service';
import { Applicant } from 'shared/models/applicant';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  @Input('applicant') applicant: Applicant;
  @Input('positionId') positionId: string;
  selectedApplicationStatus: string;
  applicationStatuses: string[] = ["APPLIED", "INTERVIEW", "ONSITE"];

  constructor(private applicantService: ApplicantService) {
  }

  ngOnInit() {
    this.selectedApplicationStatus = this.applicant.applicationStatus;
  }

  onApplicationStatusChange(applicationStatus: string) {
    this.applicantService.updateApplicationStatus(this.applicant, this.positionId, applicationStatus);
  }
}
