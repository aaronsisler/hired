import { Component, Input } from '@angular/core';
import { AppUser } from 'shared/models/app-user';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent {
  @Input('user') user: AppUser;

  constructor() { }
}
