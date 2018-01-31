import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantValidationService {
  applicationStatuses: string[] = ["APPLIED", "INTERVIEW", "ONSITE", "OFFER_MADE", "ACCEPTED", "DECLINED"];

  constructor() { }

  validateApplicationStatusChange(previousApplicationStatus: string, currentApplicationStatus: string) {
    let previousStatusIndex = this.applicationStatuses.indexOf(previousApplicationStatus);
    let currentStatusIndex = this.applicationStatuses.indexOf(currentApplicationStatus);
    return currentStatusIndex > previousStatusIndex;
  }
}
