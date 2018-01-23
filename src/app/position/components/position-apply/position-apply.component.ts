import { Document } from 'shared/models/document';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { ApplicantService } from 'shared/services/applicant.service';

@Component({
  selector: 'app-position-apply',
  templateUrl: './position-apply.component.html',
  styleUrls: ['./position-apply.component.css']
})
export class PositionApplyComponent implements OnInit, OnDestroy {
  positionId: string;
  userSubscription: Subscription;
  userId: string;
  user: AppUser;
  documentsSelected: Document[] = [];
  doesApplicationExist: boolean;

  isUserInfo: boolean = true;
  isDocumentUpload: boolean;
  isFinalReview: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private applicantService: ApplicantService,
    private router: Router) {
  }

  documentSelectorTriggered(event) {
    this.documentsSelected = event;
  }

  async ngOnInit() {
    this.positionId = this.route.snapshot.paramMap.get('id');
    this.userSubscription = await this.authService.user$.subscribe(user => this.userId = user.uid);
    this.userService.get(this.userId).take(1).subscribe(user => this.user = user);
    this.checkIfApplicationExists();
  }

  async checkIfApplicationExists() {
    let result = await this.applicantService.checkIfApplicationExistsForPosition(this.positionId, this.userId);
    result.subscribe(x => this.doesApplicationExist = x.$exists());
  }

  submitApplication() {
    return this.applicantService.submitApplication(this.positionId, this.user.$key, this.documentsSelected)
      .then(() => this.router.navigateByUrl('/'));
  }

  updateView(viewToBeShown: string) {
    this.clearAllViewBooleans();
    if (viewToBeShown == 'USER_INFO') { this.isUserInfo = true; return; }
    if (viewToBeShown == 'DOCUMENTS') { this.isDocumentUpload = true; return; }
    if (viewToBeShown == 'FINAL_REVIEW') { this.isFinalReview = true; return; }
  }

  clearAllViewBooleans() {
    this.isUserInfo = false;
    this.isDocumentUpload = false;
    this.isFinalReview = false;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
