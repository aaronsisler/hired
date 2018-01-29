import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { ApplicantService } from 'shared/services/applicant.service';
import { Applicant } from 'shared/models/applicant';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnDestroy {
  positionId: string;
  applicantId: string;
  applicantSubscription: Subscription;
  applicant: Applicant;

  constructor(private route: ActivatedRoute, private applicantService: ApplicantService) {
    this.positionId = this.route.snapshot.paramMap.get('positionId');
    this.applicantId = this.route.snapshot.paramMap.get('applicantId');
    this.applicantSubscription = this.applicantService.getApplicant(this.applicantId)
      .subscribe(applicant => this.applicant = applicant)
  }

  ngOnDestroy() {
    this.applicantSubscription.unsubscribe();
  }
}
