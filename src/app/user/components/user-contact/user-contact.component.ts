import { AppUser } from 'shared/models/app-user';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent {
  @Input('user') user: AppUser;

  constructor() { }
}
