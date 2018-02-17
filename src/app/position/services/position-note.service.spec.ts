import { TestBed, inject } from '@angular/core/testing';

import { PositionNoteService } from './position-note.service';

describe('PositionNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionNoteService]
    });
  });

  it('should be created', inject([PositionNoteService], (service: PositionNoteService) => {
    expect(service).toBeTruthy();
  }));
});
