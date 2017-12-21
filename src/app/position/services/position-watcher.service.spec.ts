import { TestBed, inject } from '@angular/core/testing';

import { PositionWatcherService } from './position-watcher.service';

describe('PositionWatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionWatcherService]
    });
  });

  it('should be created', inject([PositionWatcherService], (service: PositionWatcherService) => {
    expect(service).toBeTruthy();
  }));
});
