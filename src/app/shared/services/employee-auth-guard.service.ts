import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/services/auth.service';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => {
        if (appUser.isEmployee) return true;

        this.router.navigateByUrl('/unauthorized');
        return false;
      })
  }
}
