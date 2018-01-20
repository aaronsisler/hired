import { Document } from 'shared/models/document';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-position-apply',
  templateUrl: './position-apply.component.html',
  styleUrls: ['./position-apply.component.css']
})
export class PositionApplyComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  positionId: string;
  userId: string;
  user: AppUser;
  documentsSelected: Document[] = [];

  isUserInfo: boolean = true;
  isDocumentUpload: boolean;
  isFinalReview: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  documentSelectorTriggered(event) {
    if (this.documentsSelected.find(document => (document.$key === event.$key))) {
      this.documentsSelected = this.documentsSelected.filter(document => document.$key !== event.$key)
    }
    else {
      this.documentsSelected.push(event);
    }
  }

  async ngOnInit() {
    this.positionId = this.route.snapshot.paramMap.get('id');
    this.userSubscription = await this.authService.user$.subscribe(user => this.userId = user.uid);
    this.userService.get(this.userId).take(1).subscribe(user => this.user = user);
  }

  updateView(viewToBeShown: string) {
    this.clearAllViewBooleans();
    if (viewToBeShown == 'USER_INFO') this.isUserInfo = true;
    if (viewToBeShown == 'DOCUMENTS') this.isDocumentUpload = true;
    if (viewToBeShown == 'FINAL_REVIEW') this.isFinalReview = true;
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
