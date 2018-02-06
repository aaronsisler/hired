import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-validation',
  templateUrl: './position-validation.component.html',
  styleUrls: ['./position-validation.component.css']
})
export class PositionValidationComponent {
  //This needs to stay in this order
  //Anything added needs to be in the correct workflow position within array
  private validStatusLevels: string[] = ["OPEN", "CANDIDATE SELECTED", "OFFER MADE", "OFFER ACCEPTED", "CLOSED (CANDIDATE)", "CLOSED (PROCESS)"];

  constructor() { }

  validateStatusChange(previousStatus: string, currentStatus: string) {
    let previousStatusIndex = this.validStatusLevels.indexOf(previousStatus);
    let currentStatusIndex = this.validStatusLevels.indexOf(currentStatus);
    return currentStatusIndex > previousStatusIndex;
  }

  getValidStatuses(currentString: string): string[] {
    const indexOfPreviousStatus = this.validStatusLevels.indexOf(currentString);
    return this.validStatusLevels.slice(indexOfPreviousStatus);
  }
}
