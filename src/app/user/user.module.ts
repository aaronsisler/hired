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

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    UserProfileComponent,
    UserContactComponent,
    UserAvatarComponent,
    UserAddressComponent,
    UserNameComponent
  ],
  exports: [
    UserNameComponent,
    UserContactComponent,
    UserAddressComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
