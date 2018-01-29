import { AuthService } from 'shared/services/auth.service';
import { PositionWatcherService } from 'position/services/position-watcher.service';
import { Position } from 'shared/models/position';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
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
  isAddSub: any;
  positionSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService,
    private authService: AuthService
  ) {
    this.positionId = this.route.snapshot.paramMap.get('id');
    this.isAddSub = this.route.snapshot.paramMap.get('isAddSub');
    this.positionSubscription = this.positionService.get(this.positionId).subscribe(position => this.position = position);
  }

  async ngOnInit() {
    await this.authService.user$.take(1).toPromise().then(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
  }
}
