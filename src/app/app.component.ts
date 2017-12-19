import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      if (!user) return;

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      router.navigateByUrl(returnUrl);
      localStorage.removeItem('returnUrl');
    })
  }
}