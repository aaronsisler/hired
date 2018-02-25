import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { RouterModule } from '@angular/router';
import { UserModule } from 'user/user.module';
import { ApplicantDocumentsComponent } from './components/applicant-documents/applicant-documents.component';
import { ApplicantNotesComponent } from './components/applicant-notes/applicant-notes.component';
import { ApplicantNoteComponent } from './components/applicant-note/applicant-note.component';
import { ApplicantNoteService } from 'applicant/services/applicant-note.service';
import { ApplicantValidationService } from 'applicant/services/applicant-validation.service';
import { ApplicationWorkflowComponent } from './components/application-workflow/application-workflow.component';
import { EmployeeAuthGuardService } from 'shared/services/employee-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RouterModule.forChild([
      {
        path: 'applicant/:positionId/:applicantId',
        component: ApplicantProfileComponent,
        canActivate: [AuthGuard, EmployeeAuthGuardService]
      },
    ])
  ],
  exports: [ApplicantProfileComponent],
  declarations:
    [
      ApplicantProfileComponent,
      ApplicantDocumentsComponent,
      ApplicantNotesComponent,
      ApplicantNoteComponent,
      ApplicationWorkflowComponent
    ],
  providers: [ApplicantNoteService, ApplicantValidationService]
})
export class ApplicantModule { }
