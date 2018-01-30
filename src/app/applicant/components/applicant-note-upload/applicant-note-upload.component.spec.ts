import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNoteUploadComponent } from './applicant-note-upload.component';

describe('ApplicantNoteUploadComponent', () => {
  let component: ApplicantNoteUploadComponent;
  let fixture: ComponentFixture<ApplicantNoteUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantNoteUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantNoteUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
