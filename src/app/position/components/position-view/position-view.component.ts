import { Position } from 'shared/models/position';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-positionview',
  templateUrl: './position-view.component.html',
  styleUrls: ['./position-view.component.css']
})
export class PositionViewComponent {

  position = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private positionService: PositionService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.positionService.get(this.id).take(1).subscribe(position => this.position = position);
  }

  applyToPosition() {

  }
}