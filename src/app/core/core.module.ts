import { AuthGuard } from './../shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports : [
    HomeComponent,
    NavbarComponent
  ],
  declarations: [HomeComponent, LoginComponent, NotificationComponent, NavbarComponent, DashboardComponent, LogoutComponent]
})
export class CoreModule { }
