import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  positionsWatcher$;
  userSubscription: Subscription;
  userId: string;
  subscriptionLevels: any[] = ["ALL", "SOME", "REQUIRED"];

  constructor(
    private positionWatcherService: PositionWatcherService, private authService: AuthService) { }

  async ngOnInit() {
    this.userSubscription = await this.authService.user$.subscribe(user => this.userId = user.uid);
    this.positionsWatcher$ = await this.positionWatcherService.getAll(this.userId);
  }

  onSubLevelChange(key: string, level) {
    this.positionWatcherService.updateSubscriptionLevel(this.userId, key, level);
  }

  filter(query: string) {
    // this.filteredPositions = (query) ?
    //   this.positions.filter(position => position.title.toLowerCase().includes(query.toLowerCase())) :
    //   this.positions;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
