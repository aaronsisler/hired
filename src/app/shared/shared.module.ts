import { RouterModule } from '@angular/router';
import { NotificationService } from './services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { UserService } from 'shared/services/user.service';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { ApplicantService } from 'shared/services/applicant.service';
import { EmployeeAuthGuardService } from 'shared/services/employee-auth-guard.service';
import { AdminAuthGuardService } from 'shared/services/admin-auth-guard.service';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: 'unauthorized', component: UnauthorizedComponent }
    ])
  ],
  exports: [
    CommonModule,
    FormsModule,
    DocumentsComponent,
    DocumentUploadComponent,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    EmployeeAuthGuardService,
    AdminAuthGuardService,
    UserService,
    ApplicantService,
    NotificationService
  ],
  declarations: [DocumentsComponent, DocumentUploadComponent, UnauthorizedComponent]
})
export class SharedModule { }
