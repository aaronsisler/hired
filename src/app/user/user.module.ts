import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from 'shared/services/user.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'user-profile/:id', component: UserProfileComponent }
    ])
  ],
  declarations: [ UserProfileComponent ],
  providers: [
    UserService
  ]
})
export class UserModule { }
