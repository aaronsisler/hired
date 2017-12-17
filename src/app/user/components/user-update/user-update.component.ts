import { UserService } from 'shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  userContactInfo = {};
  id;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.userService.getContactInfo(this.id)
        .take(1).subscribe(userContactInfo => this.userContactInfo = userContactInfo);
    }
  }
}