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
  userId: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) {

    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.get(this.userId).take(1).subscribe(user => this.user = user);
  }

  update(user) {
    this.userService.update(this.userId, user)
      .then(() => this.router.navigate(['/dashboard']));
  }
}
