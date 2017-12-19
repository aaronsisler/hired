import { UserService } from 'shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  user = {};
  id;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.get(this.id).take(1).subscribe(user => this.user = user);
  }

  update(user) {
    this.userService.update(this.id, user);
    this.router.navigate(['/dashboard']);
  }
}