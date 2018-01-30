import { TestBed, inject } from '@angular/core/testing';

import { ApplicantNoteService } from './applicant-note.service';

describe('ApplicantNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantNoteService]
    });
  });

  it('should be created', inject([ApplicantNoteService], (service: ApplicantNoteService) => {
    expect(service).toBeTruthy();
  }));
});
