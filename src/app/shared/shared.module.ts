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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot()
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
  declarations: [DocumentsComponent, DocumentUploadComponent]
})
export class SharedModule { }
