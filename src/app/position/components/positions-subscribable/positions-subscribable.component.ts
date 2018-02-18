import { PositionWatcher } from 'shared/models/position-watcher';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Position } from 'shared/models/position';
import { PositionService } from 'shared/services/position.service';
import { AuthService } from 'shared/services/auth.service';
import { PositionWatched } from 'shared/models/position-watched';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'positions-subscribable',
  templateUrl: './positions-subscribable.component.html',
  styleUrls: ['./positions-subscribable.component.css']
})
export class PositionsSubscribableComponent implements OnInit, OnDestroy {
  positions: Position[];
  filteredPositions: Position[];
  positionsWatched: PositionWatched[];
  positionSubscription: Subscription;
  positionWatcherSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private positionService: PositionService,
    private positionWatcherService: PositionWatcherService) { }

  async ngOnInit() {
    this.positionSubscription = await this.positionService.getAll()
      .subscribe(positions => this.positions = positions);

    this.positionWatcherSubscription = this.authService.user$
      .switchMap(user => this.positionWatcherService.getAll(user.uid))
      .subscribe(positionsWatched => {
        this.positionsWatched = positionsWatched;
        this.filteredPositions = this.positions = this.positions.filter(position => !positionsWatched.some(f => f.$key == position.$key));
      });
  }

  filter(query: string) {
    this.filteredPositions = (query) ?
      this.positions.filter(position => position.positionId.toLowerCase().includes(query.toLowerCase()))
      : this.positions.filter(position => !this.positionsWatched.some(f => f.$key == position.$key));
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
    this.positionWatcherSubscription.unsubscribe();
  }
}
