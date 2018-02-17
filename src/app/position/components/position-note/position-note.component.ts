import { Component, Input } from '@angular/core';
import { PositionNote } from 'shared/models/position-note';
import { PositionNoteService } from 'position/services/position-note.service';

@Component({
  selector: 'app-position-note',
  templateUrl: './position-note.component.html',
  styleUrls: ['./position-note.component.css']
})
export class PositionNoteComponent {
  @Input('positionNote') positionNote: PositionNote;
  @Input('readonly') readonly: boolean = true;

  constructor(private positionNoteService: PositionNoteService) { }

  unlockNote() {
    this.readonly = false;
  }

  updateNote() {
    this.readonly = true;
    this.positionNoteService.update(this.positionNote);
  }
}
