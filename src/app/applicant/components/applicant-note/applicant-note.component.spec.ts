import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNoteComponent } from './applicant-note.component';

describe('ApplicantNoteComponent', () => {
  let component: ApplicantNoteComponent;
  let fixture: ComponentFixture<ApplicantNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
