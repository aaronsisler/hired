import { Position } from 'shared/models/position';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-position-internal-view',
  templateUrl: './position-internal-view.component.html',
  styleUrls: ['./position-internal-view.component.css']
})
export class PositionInternalViewComponent {

  position: Position;
  positionId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private positionService: PositionService
  ) {
    this.positionId = this.route.snapshot.paramMap.get('id');
    if (this.positionId) this.positionService.get(this.positionId).take(1).subscribe(position => this.position = position);

  }

  subscribeToPosition() {

  }
}
