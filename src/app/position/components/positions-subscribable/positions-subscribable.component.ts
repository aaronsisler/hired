import { PositionWatcher } from './../../../shared/models/position-watcher';
import { PositionWatcherService } from './../../services/position-watcher.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Position } from 'shared/models/position';
import { PositionService } from 'shared/services/position.service';
import { AuthService } from 'shared/services/auth.service';
import { PositionWatched } from 'shared/models/position-watched';
import 'rxjs/add/operator/filter';

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
      .subscribe(positionWatcher => {
        this.positionsWatched = positionWatcher.positionsWatched;
        this.filteredPositions = this.positions = this.positions.filter(position => !positionWatcher.positionsWatched.some(f => f.$key == position.$key));
      });
  }

  filter(query: string) {
    this.filteredPositions = (query) ?
      this.positions.filter(position => position.title.toLowerCase().includes(query.toLowerCase()))
      : this.positions.filter(position => !this.positionsWatched.some(f => f.$key == position.$key));
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
    this.positionWatcherSubscription.unsubscribe();
  }
}