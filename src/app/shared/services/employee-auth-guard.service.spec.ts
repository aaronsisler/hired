import { TestBed, inject } from '@angular/core/testing';

import { EmployeeAuthGuardService } from './employee-auth-guard.service';

describe('EmployeeAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAuthGuardService]
    });
  });

  it('should be created', inject([EmployeeAuthGuardService], (service: EmployeeAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
