import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { RouterModule } from '@angular/router';
import { UserModule } from 'user/user.module';

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
  declarations: [ApplicantProfileComponent],
  providers: []
})
export class ApplicantModule { }
