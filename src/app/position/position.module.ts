import { PositionWatcherService } from './services/position-watcher.service';
import { PositionService } from 'shared/services/position.service';
import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { PositionsComponent } from './components/positions/positions.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { PositionCreateComponent } from './components/position-create/position-create.component';
import { PositionExternalViewComponent } from './components/position-external-view/position-external-view.component';
import { PositionInternalViewComponent } from './components/position-internal-view/position-internal-view.component';
import { PositionsSubscribableComponent } from './components/positions-subscribable/positions-subscribable.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'position-create', component: PositionCreateComponent },
      { path: 'position/:id', component: PositionExternalViewComponent },
      { path: 'position-data/:id', component: PositionInternalViewComponent },
      { path: 'positions-subscribable', component: PositionsSubscribableComponent }
    ])
  ],
  exports: [
    PositionsComponent
  ],
  providers: [
    PositionService,
    PositionWatcherService
  ],
  declarations: [
    PositionsComponent,
    PositionCreateComponent,
    PositionExternalViewComponent,
    PositionInternalViewComponent,
    PositionsSubscribableComponent
  ]
})
export class PositionModule { }
