import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantValidationService {
  //This needs to stay in this order
  //Anything added needs to be in the correct workflow position within array
  validApplicationStatuses: string[] = ["APPLIED", "INTERVIEW", "ONSITE", "OFFER_MADE", "ACCEPTED", "DECLINED"];

  constructor() { }

  validateApplicationStatusChange(previousApplicationStatus: string, currentApplicationStatus: string) {
    let previousStatusIndex = this.validApplicationStatuses.indexOf(previousApplicationStatus);
    let currentStatusIndex = this.validApplicationStatuses.indexOf(currentApplicationStatus);
    return currentStatusIndex > previousStatusIndex;
  }
}
