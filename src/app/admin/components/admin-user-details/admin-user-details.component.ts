import { AppUser } from 'shared/models/app-user';
import { UserService } from 'shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit, OnDestroy {
  userId: string;
  userSubscription: Subscription;
  user: AppUser;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.userSubscription = this.userService.get(this.userId).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
