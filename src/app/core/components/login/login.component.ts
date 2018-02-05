import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isRedirect: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.isRedirect = this.router.url.indexOf('returnUrl') > -1;
  }

  login() {
    this.auth.login();
  }
}
