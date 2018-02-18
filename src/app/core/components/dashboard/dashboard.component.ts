import { AppUser } from './../../../shared/models/app-user';
import { UserService } from 'shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  user: AppUser;
  //userId: string;

  constructor(private authService: AuthService, private userService: UserService) { }

  async ngOnInit() {
    this.userSubscription = await this.authService.user$
      .switchMap(authUser => this.userService.get(authUser.uid))
      .subscribe(user => this.user = user);
    //subscribe( user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
