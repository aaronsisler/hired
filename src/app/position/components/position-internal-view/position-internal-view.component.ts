import { AuthService } from 'shared/services/auth.service';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { Position } from 'shared/models/position';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'position-internal-view',
  templateUrl: './position-internal-view.component.html',
  styleUrls: ['./position-internal-view.component.css']
})
export class PositionInternalViewComponent implements OnInit {
  position: Position;
  positionId: string;
  userId: string;
  subscriptionLevels: string[] = ["ALL", "SOME", "REQUIRED", "NONE"];
  selectedSubscriptionLevel: string;
  isAddSub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private positionService: PositionService,
    private positionWatcherService: PositionWatcherService,
    private authService: AuthService
  ) {
    this.positionId = this.route.snapshot.paramMap.get('id');
    this.isAddSub = this.route.snapshot.paramMap.get('isAddSub');
    if (this.positionId) {
      this.positionService.get(this.positionId).take(1).subscribe(position => this.position = position);
    }
  }
  async ngOnInit() {
    await this.authService.user$.take(1).toPromise().then(user => this.userId = user.uid);
    this.positionWatcherService.getPosition(this.userId, this.positionId)
      .subscribe(positionWatcher => {
        this.selectedSubscriptionLevel = positionWatcher.subscriptionLevel ? positionWatcher.subscriptionLevel : 'NONE';
      });
  }

  async subscribeToPosition(selectedSubscriptionLevel: string) {
    this.positionWatcherService.updateSubscriptionLevel(this.userId, this.positionId, selectedSubscriptionLevel)
      .then(() => this.router.navigateByUrl('/dashboard'));
  }
}
