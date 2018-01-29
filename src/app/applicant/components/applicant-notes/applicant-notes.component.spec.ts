import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNotesComponent } from './applicant-notes.component';

describe('ApplicantNotesComponent', () => {
  let component: ApplicantNotesComponent;
  let fixture: ComponentFixture<ApplicantNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
