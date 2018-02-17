import { Router } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import { Position } from 'shared/models/position';
import { Component, OnInit, Input } from '@angular/core';
import { PositionValidationService } from 'position/services/position-validation.service';

@Component({
  selector: 'app-position-status',
  templateUrl: './position-status.component.html',
  styleUrls: ['./position-status.component.css']
})
export class PositionStatusComponent implements OnInit {
  @Input('position') position: Position;
  statusLevels: string[];
  previousStatus: string;
  selectedStatus: string;


  constructor(
    private positionService: PositionService,
    private router: Router,
    private positionValidationService: PositionValidationService) {

  }

  ngOnInit() {
    this.previousStatus = this.position.status;
    this.statusLevels = this.positionValidationService.getValidStatuses(this.previousStatus);
  }

  updateStatus(selectedStatus) {
    this.positionService.update(this.position)
      .then(() => this.router.navigateByUrl('/dashboard'));
  }
}
