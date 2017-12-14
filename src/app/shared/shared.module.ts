import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { UserService } from 'shared/services/user.service';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot()
  ],
  exports:[
    CommonModule,
    FormsModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  declarations: []
})
export class SharedModule { }
