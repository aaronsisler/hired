import { PositionService } from 'shared/services/position.service';
import { Component, OnDestroy } from '@angular/core';
import { Position } from 'shared/models/position';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnDestroy {
  positions: Position[];
  filteredPositions: any[];
  positionSubscription: Subscription;

  constructor(private positionService: PositionService) {
    this.positionSubscription = this.positionService.getAll()
      .subscribe(positions => this.filteredPositions = this.positions = positions);
  }

  filter(query: string) {
    this.filteredPositions = (query) ?
      this.positions.filter(position => position.title.toLowerCase().includes(query.toLowerCase())) :
      this.positions;
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
  }
}
