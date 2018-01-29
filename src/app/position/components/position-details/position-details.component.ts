import { Position } from 'shared/models/position';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent {
  @Input('position') position: Position

  constructor() { }
}
