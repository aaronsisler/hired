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
import { PositionApplyComponent } from './components/position-apply/position-apply.component';
import { UserModule } from 'user/user.module';
import { PositionApplyReviewComponent } from './components/position-apply-review/position-apply-review.component';

@NgModule({
  imports: [
    SharedModule,
    UserModule,
    RouterModule.forChild([
      { path: 'position-create', component: PositionCreateComponent, canActivate: [AuthGuard]  },
      { path: 'position/:id', component: PositionExternalViewComponent },
      { path: 'position-data/:id', component: PositionInternalViewComponent, canActivate: [AuthGuard]  },
      { path: 'positions-subscribable', component: PositionsSubscribableComponent, canActivate: [AuthGuard]  },
      { path: 'position-apply/:id', component: PositionApplyComponent, canActivate: [AuthGuard]  }
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
    PositionsSubscribableComponent,
    PositionApplyComponent,
    PositionApplyReviewComponent
  ]
})
export class PositionModule { }
