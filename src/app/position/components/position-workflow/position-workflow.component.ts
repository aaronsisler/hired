import { Position } from 'shared/models/position';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position-workflow',
  templateUrl: './position-workflow.component.html',
  styleUrls: ['./position-workflow.component.css']
})
export class PositionWorkflowComponent implements OnInit {
  @Input('userId') userId: string;
  @Input('position') position: Position;

  constructor() { }

  ngOnInit() {
  }

}
