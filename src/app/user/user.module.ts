import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserService } from 'shared/services/user.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'userupdate/:id', component: UserUpdateComponent }
    ])
  ],
  declarations: [ UserUpdateComponent ],
  providers: [
    UserService
  ]
})
export class UserModule { }
