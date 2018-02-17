import { Component, OnInit, Input } from '@angular/core';
import { PositionNoteService } from 'position/services/position-note.service';

@Component({
  selector: 'app-position-notes',
  templateUrl: './position-notes.component.html',
  styleUrls: ['./position-notes.component.css']
})
export class PositionNotesComponent implements OnInit {
  @Input('positionId') positionId: string;
  positionNotes$;

  constructor(private positionNoteService: PositionNoteService) { }

  ngOnInit() {
    this.positionNotes$ = this.positionNoteService.getAll(this.positionId);
  }
}
