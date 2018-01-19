import { UserService } from 'shared/services/user.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserContactComponent } from './components/user-contact/user-contact.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { DocumentService } from 'shared/services/document.service';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'user-account/:id', component: UserAccountComponent }
    ])
  ],
  declarations: [
    UserProfileComponent,
    UserContactComponent,
    UserAvatarComponent,
    UserAddressComponent,
    UserNameComponent,
    UserAccountComponent
  ],
  providers: [
    UserService,
    DocumentService
  ]
})
export class UserModule { }
