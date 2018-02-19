import { AuthService } from 'shared/services/auth.service';
import { ApplicantService } from 'shared/services/applicant.service';
import { Position } from 'shared/models/position';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-position-external-view',
  templateUrl: './position-external-view.component.html',
  styleUrls: ['./position-external-view.component.css']
})
export class PositionExternalViewComponent implements OnInit, OnDestroy {
  position: Position;
  positionId: string;
  doesApplicationExist: boolean;
  userId: string;
  userSubscription: Subscription;
  applicationSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService,
    private applicantService: ApplicantService,
    private authService: AuthService,
    private userService: UserService
  ) {

  }

  async ngOnInit() {
    this.positionId = this.route.snapshot.paramMap.get('id');
    if (this.positionId) this.positionService.get(this.positionId).take(1).subscribe(position => this.position = position);
    this.userSubscription = await this.authService.user$.subscribe(authUser => {if(authUser) this.userId = authUser.uid});
    if(this.userId) this.checkIfApplicationExists();
  }

  async checkIfApplicationExists() {
    this.applicationSubscription = await this.applicantService.checkIfApplicationExistsForPosition(this.positionId, this.userId)
      .subscribe(x => this.doesApplicationExist = x.$exists());
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    if(this.applicationSubscription) this.applicationSubscription.unsubscribe();
  }
}
