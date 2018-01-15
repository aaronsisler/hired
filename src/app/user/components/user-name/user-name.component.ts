import { Component, Input } from '@angular/core';
import { AppUser } from 'shared/models/app-user';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  @Input('user') user: AppUser;

  constructor() { }

}
