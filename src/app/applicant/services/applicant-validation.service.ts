import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantValidationService {
  //This needs to stay in this order
  //Anything added needs to be in the correct workflow position within array
  private validApplicationStatuses: string[] = ["APPLIED", "INTERVIEW", "ONSITE", "OFFER_MADE", "ACCEPTED", "DECLINED"];

  constructor() { }

  validateApplicationStatusChange(previousApplicationStatus: string, currentApplicationStatus: string) {
    let previousStatusIndex = this.validApplicationStatuses.indexOf(previousApplicationStatus);
    let currentStatusIndex = this.validApplicationStatuses.indexOf(currentApplicationStatus);
    return currentStatusIndex > previousStatusIndex;
  }

  getValidStatuses(currentStatus: string): string[] {
    const indexOfCurrentStatus = this.validApplicationStatuses.indexOf(currentStatus);
    return this.validApplicationStatuses.slice(indexOfCurrentStatus);
  }
}
