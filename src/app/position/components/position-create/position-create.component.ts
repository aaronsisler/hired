import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from 'shared/models/position';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-positioncreate',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.css']
})
export class PositionCreateComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  positionSubscription: Subscription;
  position = { status: "OPEN" };
  isCreateDisabled: boolean = true;
  positionIds: string[];
  showError: boolean;

  constructor(
    private positionService: PositionService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.position["ownerId"] = user.uid);
    this.positionSubscription = this.positionService.getAllPositionIds()
      .subscribe(positionIdList => this.positionIds = positionIdList)
  }

  isPositionIdUnique(positionId) {
    if (!positionId) {
      this.isCreateDisabled = true;
      return;
    }
    this.isCreateDisabled = this.positionIds.includes(positionId);
    if (this.isCreateDisabled) {
      //Used to delay the error showing if there isn't actually an error //refactor
      this.showError = true;
      return
    }
    this.showError = false;
  }

  create() {
    this.positionService.create(this.position)
      .then(() => this.router.navigateByUrl('/dashboard'));
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.positionSubscription.unsubscribe();
  }
}
