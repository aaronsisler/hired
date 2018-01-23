import { Component, Input } from '@angular/core';
import { AppUser } from 'shared/models/app-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input('user') user: AppUser;
  @Input('readonly') readonly: boolean;

  constructor() { }

}
