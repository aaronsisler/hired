import { UserService } from 'shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'shared/models/app-user';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: AppUser;
  id;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.get(this.id).take(1).subscribe(user => this.user = user);
  }

  update(user) {
    this.userService.update(this.id, user)
      .then(() => this.router.navigate(['/dashboard']));
  }
}
