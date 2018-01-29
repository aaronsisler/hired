import { UserService } from 'shared/services/user.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserContactComponent } from './components/user-contact/user-contact.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { DocumentService } from 'shared/services/document.service';
import { UserComponent } from './components/user/user.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'user-account/:id', component: UserAccountComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    UserProfileComponent,
    UserContactComponent,
    UserAvatarComponent,
    UserAddressComponent,
    UserNameComponent,
    UserAccountComponent,
    UserComponent
  ],
  exports: [
    UserNameComponent,
    UserContactComponent,
    UserAddressComponent,
    UserComponent
  ],
  providers: [
    UserService,
    DocumentService
  ]
})
export class UserModule { }
