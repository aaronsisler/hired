import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PositionWatcherService } from 'position/services/position-watcher.service';

@Component({
  selector: 'app-position-subscription',
  templateUrl: './position-subscription.component.html',
  styleUrls: ['./position-subscription.component.css']
})
export class PositionSubscriptionComponent implements OnInit {
  @Input('userId') userId: string;
  @Input('positionId') positionId: string;
  subscriptionLevels: string[] = ["ALL", "SOME", "REQUIRED", "NONE"];
  selectedSubscriptionLevel: string;

  constructor(private positionWatcherService: PositionWatcherService, private router: Router) { }

  ngOnInit() {
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
