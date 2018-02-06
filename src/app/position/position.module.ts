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
import { PositionSubscriptionComponent } from './components/position-subscription/position-subscription.component';
import { PositionDetailsComponent } from './components/position-details/position-details.component';
import { PositionApplicantsComponent } from './components/position-applicants/position-applicants.component';
import { ApplicantModule } from 'applicant/applicant.module';
import { EmployeeAuthGuardService } from 'shared/services/employee-auth-guard.service';
import { PositionOwnerComponent } from './components/position-owner/position-owner.component';
import { PositionWorkflowComponent } from './components/position-workflow/position-workflow.component';
import { PositionStatusComponent } from './components/position-status/position-status.component';
import { PositionValidationComponent } from './services/position-validation/position-validation.component';

@NgModule({
  imports: [
    SharedModule,
    UserModule,
    ApplicantModule,
    RouterModule.forChild([
      { path: 'position/:id', component: PositionExternalViewComponent },
      { path: 'position-apply/:id', component: PositionApplyComponent, canActivate: [AuthGuard] },
      { path: 'position-create', component: PositionCreateComponent, canActivate: [AuthGuard, EmployeeAuthGuardService] },
      { path: 'position-data/:id', component: PositionInternalViewComponent, canActivate: [AuthGuard, EmployeeAuthGuardService] },
      { path: 'positions-subscribable', component: PositionsSubscribableComponent, canActivate: [AuthGuard, EmployeeAuthGuardService] }
    ])
  ],
  exports: [
    PositionsComponent
  ],
  providers: [
    PositionService,
    PositionWatcherService,
    PositionValidationComponent
  ],
  declarations: [
    PositionsComponent,
    PositionCreateComponent,
    PositionExternalViewComponent,
    PositionInternalViewComponent,
    PositionsSubscribableComponent,
    PositionApplyComponent,
    PositionApplyReviewComponent,
    PositionSubscriptionComponent,
    PositionDetailsComponent,
    PositionApplicantsComponent,
    PositionOwnerComponent,
    PositionWorkflowComponent,
    PositionStatusComponent,
    PositionValidationComponent
  ]
})
export class PositionModule { }
