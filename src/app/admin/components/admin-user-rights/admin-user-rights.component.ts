import { AppUser } from 'shared/models/app-user';
import { Component, Input } from '@angular/core';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-admin-user-rights',
  templateUrl: './admin-user-rights.component.html',
  styleUrls: ['./admin-user-rights.component.css']
})
export class AdminUserRightsComponent {
  @Input('user') user: AppUser;
  isAdmin: boolean;
  isEmployee: boolean;

  constructor(private userService: UserService) { }

  toggleIsEmployee() {
    this.isEmployee = !this.isEmployee;
    this.userService.update(this.user.$key, this.user);
  }

  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
    this.userService.update(this.user.$key, this.user);
  }

  checkAdminBox() {
    if (this.user.isAdmin) {
      return true;
    }
    return false;
  }

  checkEmployeeBox() {
    if (this.user.isEmployee) {
      return true;
    }
    return false;
  }
}
