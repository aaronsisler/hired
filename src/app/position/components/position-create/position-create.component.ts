import { Router } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from 'shared/models/position';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-positioncreate',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.css']
})
export class PositionCreateComponent implements OnInit, OnDestroy {
  position = {};
  isCreateDisabled: boolean = true;
  positionIds: string[];
  positionSub: Subscription
  showError: boolean;

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.positionSub = this.positionService.getAllPositionIds()
      .subscribe(positionIdList => this.positionIds = positionIdList)
  }

  isPositionIdUnique(positionId) {
    if (!positionId) {
      this.isCreateDisabled = true;
      return;
    }
    this.isCreateDisabled = this.positionIds.includes(positionId);
    if (this.isCreateDisabled) {
      //Used to delay the error showing if there isn't actually an error //refactor
      this.showError = true;
      return
    }
    this.showError = false;
  }

  create() {
    this.positionService.create(this.position)
      .then(() => this.router.navigateByUrl('/dashboard'));
  }

  ngOnDestroy() {
    this.positionSub.unsubscribe();
  }
}
