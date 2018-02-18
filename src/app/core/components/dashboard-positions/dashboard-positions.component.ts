import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-positions',
  templateUrl: './dashboard-positions.component.html',
  styleUrls: ['./dashboard-positions.component.css']
})
export class DashboardPositionsComponent implements OnInit {
  @Input('userId') userId: string;
  positionWatcherSubscription: Subscription;
  positionsWatched: any = [];
  filteredPositionsWatched: any = [];
  subscriptionLevels: string[] = ["ALL", "SOME", "REQUIRED"];

  constructor(private positionWatcherService: PositionWatcherService, private router: Router) { }

  ngOnInit() {
    this.positionWatcherSubscription = this.positionWatcherService.getAll(this.userId)
      .subscribe(positionsWatched => this.filteredPositionsWatched = this.positionsWatched = positionsWatched);
  }

  onSubLevelChange(key: string, positionId: string, level) {
    this.positionWatcherService.updateSubscriptionLevel(this.userId, key, positionId, level);
  }

  filter(query: string) {
    this.filteredPositionsWatched = (query) ?
      this.positionsWatched.filter(positionWatched => positionWatched.positionId.toLowerCase().includes(query.toLowerCase())) :
      this.positionsWatched;
  }

  ngOnDestroy() {
    this.positionWatcherSubscription.unsubscribe();
  }

  navigateToSubscribablePositions() {
    this.router.navigateByUrl('/positions-subscribable');
  }
}
