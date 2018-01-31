import { TestBed, inject } from '@angular/core/testing';

import { ApplicantValidationService } from './applicant-validation.service';

describe('ApplicantValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantValidationService]
    });
  });

  it('should be created', inject([ApplicantValidationService], (service: ApplicantValidationService) => {
    expect(service).toBeTruthy();
  }));
});
