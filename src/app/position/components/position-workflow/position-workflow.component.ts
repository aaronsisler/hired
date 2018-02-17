import { Position } from 'shared/models/position';
import { Component, OnInit, Input } from '@angular/core';
import { PositionService } from 'shared/services/position.service';
import { PositionValidationService } from 'position/services/position-validation.service';
import { PositionNoteService } from 'position/services/position-note.service';
import { NotificationService } from 'shared/services/notification.service';

@Component({
  selector: 'app-position-workflow',
  templateUrl: './position-workflow.component.html',
  styleUrls: ['./position-workflow.component.css']
})
export class PositionWorkflowComponent implements OnInit {
  @Input('userId') userId: string;
  @Input('position') position: Position;
  positionStatuses: string[];
  previousStatus: string;
  selectedStatus: string;
  placeHolderText: string = "Change position status to add a note";
  noteContent: string;
  inputNoteContent: string;
  canAddNote: boolean;

  constructor(private positionNoteService: PositionNoteService,
    private notificationService: NotificationService,
    private positionService: PositionService,
    private positionValidationService: PositionValidationService) {
  }

  ngOnInit() {
    this.previousStatus = this.position.status;
    this.positionStatuses = this.positionValidationService.getValidStatuses(this.previousStatus);
  }

  onStatusChange() {
    let isValidStatusChange = this.positionValidationService
      .validateStatusChange(this.previousStatus, this.position.status);
    this.canNoteBeAdded(isValidStatusChange);
  }

  triggerPositionChange() {
    //Stash a copy of the content and clear text area
    //There is a delay if you wait to update and THEN clear text area
    let noteContent = this.noteContent;
    this.noteContent = this.inputNoteContent = "";
    this.positionNoteService.create(this.position.$key, noteContent);
    this.positionService.update(this.position);
    this.previousStatus = this.position.status;
    this.positionStatuses = this.positionValidationService.getValidStatuses(this.previousStatus);
    this.canAddNote = false;
    this.notificationService.sendPositionStatusChangeNotification(this.position.$key, this.position.positionId);
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
