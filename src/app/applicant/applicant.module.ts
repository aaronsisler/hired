import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { RouterModule } from '@angular/router';
import { UserModule } from 'user/user.module';
import { ApplicantDocumentsComponent } from './components/applicant-documents/applicant-documents.component';
import { ApplicantStatusComponent } from './components/applicant-status/applicant-status.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { ApplicantNotesComponent } from './components/applicant-notes/applicant-notes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RouterModule.forChild([
      { path: 'applicant/:positionId/:applicantId', component: ApplicantProfileComponent },
    ])
  ],
  exports: [ApplicantProfileComponent],
  declarations: [ApplicantProfileComponent, ApplicantDocumentsComponent, ApplicantStatusComponent, ApplicationStatusComponent, ApplicantNotesComponent],
  providers: []
})
export class ApplicantModule { }
