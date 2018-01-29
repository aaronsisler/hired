import { PositionWatcher } from 'shared/models/position-watcher';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  positionWatcherSubscription: Subscription;
  userId: string;
  positionsWatched: any = [];
  filteredPositionsWatched: any = [];
  subscriptionLevels: any[] = ["ALL", "SOME", "REQUIRED"];

  constructor(
    private positionWatcherService: PositionWatcherService, private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.userSubscription = await this.authService.user$.subscribe(user => this.userId = user.uid);
    this.positionWatcherSubscription = this.positionWatcherService.getAll(this.userId)
      .subscribe(positionsWatched => this.filteredPositionsWatched = this.positionsWatched = positionsWatched);
  }

  onSubLevelChange(key: string, jobId: string, level) {
    this.positionWatcherService.updateSubscriptionLevel(this.userId, key, jobId, level);
  }

  filter(query: string) {
    this.filteredPositionsWatched = (query) ?
      this.positionsWatched.filter(positionWatched => positionWatched.$key.toLowerCase().includes(query.toLowerCase())) :
      this.positionsWatched;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.positionWatcherSubscription.unsubscribe();
  }

  navigateToSubscribablePositions() {
    this.router.navigateByUrl('/positions-subscribable');
  }
}
