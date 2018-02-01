import { Applicant } from 'shared/models/applicant';
import { Component, OnInit, Input } from '@angular/core';
import { ApplicantNoteService } from 'applicant/services/applicant-note.service';
import { ApplicantService } from 'shared/services/applicant.service';
import { ApplicantValidationService } from 'applicant/services/applicant-validation.service';
import { NotificationService } from 'shared/services/notification.service';

@Component({
  selector: 'app-application-workflow',
  templateUrl: './application-workflow.component.html',
  styleUrls: ['./application-workflow.component.css']
})
export class ApplicationWorkflowComponent implements OnInit {
  @Input('applicant') applicant: Applicant;
  @Input('positionId') positionId: string;
  applicationStatuses: string[];
  previousStatus: string;
  placeHolderText: string = "Change application status to add a note";
  noteContent: string;
  inputNoteContent: string;
  canAddNote: boolean;

  constructor(private applicantNoteService: ApplicantNoteService,
    private applicantService: ApplicantService,
    private notificationService: NotificationService,
    private applicantValidationService: ApplicantValidationService) { }

  ngOnInit() {
    this.previousStatus = this.applicant.applicationStatus;
    this.applicationStatuses = this.applicantValidationService.validApplicationStatuses;
    const indexOfPreviousStatus = this.applicationStatuses.indexOf(this.previousStatus)
    this.applicationStatuses = this.applicationStatuses.slice(indexOfPreviousStatus);
  }

  onStatusChange() {
    let isValidStatusChange = this.applicantValidationService.validateApplicationStatusChange(this.previousStatus, this.applicant.applicationStatus);
    this.canNoteBeAdded(isValidStatusChange);
  }

  triggerApplicationChange() {
    //Stash a copy of the content and clear text area
    //There is a delay if you wait to update and THEN clear text area
    let noteContent = this.noteContent;
    this.noteContent = this.inputNoteContent = "";
    this.applicantNoteService.create(this.applicant.$key, noteContent);
    this.applicantService.updateApplicationStatus(this.applicant, this.positionId);
    this.previousStatus = this.applicant.applicationStatus;
    this.canAddNote = false;
    this.notificationService.sendApplicationStatusChangeNotification(this.positionId, this.applicant.$key);
  }

  canNoteBeAdded(isValidStatusChange: boolean) {
    if (isValidStatusChange) {
      this.canAddNote = true;
      this.noteContent = this.inputNoteContent;
      return;
    }
    this.inputNoteContent = this.noteContent;
    this.noteContent = "";
    this.canAddNote = false;
  }
}
