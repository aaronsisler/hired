import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionValidationService } from './position-validation.service';

describe('PositionValidationService', () => {
  let component: PositionValidationService;
  let fixture: ComponentFixture<PositionValidationService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionValidationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionValidationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
