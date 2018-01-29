import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { Position } from 'shared/models/position';

@Component({
  selector: 'app-position-subscription',
  templateUrl: './position-subscription.component.html',
  styleUrls: ['./position-subscription.component.css']
})
export class PositionSubscriptionComponent implements OnInit {
  @Input('userId') userId: string;
  @Input('position') position: Position;
  subscriptionLevels: string[] = ["ALL", "SOME", "REQUIRED", "NONE"];
  selectedSubscriptionLevel: string;

  constructor(private positionWatcherService: PositionWatcherService, private router: Router) { }

  ngOnInit() {
    this.positionWatcherService.getPosition(this.userId, this.position.$key)
      .subscribe(positionWatcher => {
        this.selectedSubscriptionLevel = positionWatcher.subscriptionLevel ? positionWatcher.subscriptionLevel : 'NONE';
      });
  }

  async subscribeToPosition(selectedSubscriptionLevel: string) {
    this.positionWatcherService.updateSubscriptionLevel(this.userId, this.position.$key, this.position.jobId, selectedSubscriptionLevel)
      .then(() => this.router.navigateByUrl('/dashboard'));
  }
}
