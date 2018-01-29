import { UserService } from 'shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Applicant } from 'shared/models/applicant';
import { ApplicantService } from 'shared/services/applicant.service';

@Component({
  selector: 'app-position-applicants',
  templateUrl: './position-applicants.component.html',
  styleUrls: ['./position-applicants.component.css']
})
export class PositionApplicantsComponent implements OnInit, OnDestroy {
  @Input('positionId') positionId: string;
  positionApplicants: any[] = [];
  filteredPositionApplicants: any[] = [];
  applicantSubscription: Subscription;

  constructor(private applicantService: ApplicantService, private userService: UserService) {
  }

  async ngOnInit() {
    this.applicantSubscription = this.applicantService.getApplicantsForPosition(this.positionId)
      .subscribe(applicantList => {
        this.filteredPositionApplicants = this.positionApplicants = applicantList
      })
  }

  filter(query: string) {
    this.filteredPositionApplicants = (query) ?
      this.positionApplicants.filter(applicant => applicant.displayName.toLowerCase().includes(query.toLowerCase())) :
      this.positionApplicants;
  }

  ngOnDestroy() {
    this.applicantSubscription.unsubscribe();
  }
}
