import { PositionWatcher } from './../../../shared/models/position-watcher';
import { PositionWatcherService } from './../../services/position-watcher.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Position } from 'shared/models/position';
import { PositionService } from 'shared/services/position.service';
import { AuthService } from 'shared/services/auth.service';
import { PositionWatched } from 'shared/models/position-watched';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'positions-subscribable',
  templateUrl: './positions-subscribable.component.html',
  styleUrls: ['./positions-subscribable.component.css']
})
export class PositionsSubscribableComponent implements OnInit, OnDestroy {
  positions: Position[];
  positions$: FirebaseListObservable<any>;
  filteredPositions: Position[];
  positionsWatched: PositionWatched[] = [];
  userId: string;
  userSubscription: Subscription;
  positionSubscription: Subscription;
  positionWatcherSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private positionService: PositionService,
    private positionWatcherService: PositionWatcherService) { }

  async ngOnInit() {
    //this.userId = this.route.snapshot.paramMap.get('id');
    this.userSubscription = await this.authService.user$.subscribe(user => this.userId = user.uid);
    this.positionSubscription = await this.positionService.getAll()
      .subscribe(positions => this.filteredPositions = this.positions = positions);

    this.positionWatcherSubscription = await this.positionService.getAll()
      .switchMap(positions => this.positionWatcherService.getAll(this.userId))
      .subscribe(positionWatcher =>
        this.filteredPositions = this.positions.filter(position => !positionWatcher.positionsWatched.some(f => f.$key == position.$key)));
  }

  filterWatchedPositionsFromAllPositions() {
    if (this.positions && this.positionsWatched)
      this.filteredPositions = this.positions.filter(position => !this.positionsWatched.some(f => f.$key == position.$key));
  }

  filter(query: string) {
    this.filteredPositions = (query) ?
      this.positions.filter(position => position.title.toLowerCase().includes(query.toLowerCase())) : this.positions;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.positionSubscription.unsubscribe();
    this.positionWatcherSubscription.unsubscribe();
  }
}