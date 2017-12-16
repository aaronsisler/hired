import { PositionService } from 'shared/services/position.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { PositionsComponent } from './components/positions/positions.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { PositionViewComponent } from './components/positionview/positionview.component';
import { PositionCreateComponent } from './components/positioncreate/positioncreate.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'positions/:id',
        component: PositionViewComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [
    PositionsComponent
  ],
  providers: [
    PositionService
  ],
  declarations: [
    PositionsComponent,
    PositionViewComponent,
    PositionCreateComponent
  ]
})
export class PositionModule { }
