import { PositionService } from 'shared/services/position.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { PositionsComponent } from './components/positions/positions.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { PositionViewComponent } from './components/position-view/position-view.component';
import { PositionCreateComponent } from './components/position-create/position-create.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'positions/:id', component: PositionViewComponent }
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
