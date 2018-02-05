import { AuthGuard } from 'shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUserSearchComponent } from './components/admin-user-search/admin-user-search.component';
import { AdminUserDetailsComponent } from './components/admin-user-details/admin-user-details.component';
import { AdminAuthGuardService } from 'shared/services/admin-auth-guard.service';
import { UserModule } from 'user/user.module';

@NgModule({
  imports: [
    SharedModule,
    UserModule,
    RouterModule.forChild([
      { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
      { path: 'admin-user-details/:userId', component: AdminUserDetailsComponent, canActivate: [AuthGuard, AdminAuthGuardService] }
    ])
  ],
  declarations: [AdminDashboardComponent, AdminUserSearchComponent, AdminUserDetailsComponent]
})
export class AdminModule { }
