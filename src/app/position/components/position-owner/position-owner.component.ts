import { AppUser } from 'shared/models/app-user';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'shared/services/user.service';
import { Position } from 'shared/models/position';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-position-owner',
  templateUrl: './position-owner.component.html',
  styleUrls: ['./position-owner.component.css']
})
export class PositionOwnerComponent implements OnInit, OnDestroy {
  @Input('position') position: Position;
  user: AppUser;
  userSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.get(this.position.positionOwnerId)
      .subscribe(user => this.user = user);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
