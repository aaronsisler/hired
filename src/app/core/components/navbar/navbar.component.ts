import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'shared/models/app-user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(private auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
}