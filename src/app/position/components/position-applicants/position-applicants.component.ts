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
  query: any;

  constructor(private applicantService: ApplicantService, private userService: UserService) {
  }

  async ngOnInit() {
    // this.applicantSubscription = this.applicantService.getApplicantsForPosition(this.positionId)
    //   .subscribe(userIds => {
    //     userIds.forEach(userId => {
    //       this.userService.get(userId.$key).subscribe(user => {
    //         if (this.positionApplicants.find(x => x.userId == user.$key)) {
    //           this.positionApplicants.find(x => x.userId == user.$key)["displayName"] = user.displayName; return;
    //         }
    //         this.positionApplicants.push({ userId: user.$key, displayName: user.displayName ? user.displayName : "Unknown" })
    //       });
    //     })
    //     this.filteredPositionApplicants = this.positionApplicants;
    //   });

    this.applicantSubscription = this.applicantService.getApplicantsForPositionUserInj(this.positionId)
      .subscribe(userList => {
        this.filteredPositionApplicants = this.positionApplicants = userList
      })
  }

  filter(query: string) {
    this.filteredPositionApplicants = (query) ?
      this.positionApplicants.filter(userId => userId.displayName.toLowerCase().includes(query.toLowerCase())) :
      this.positionApplicants;
  }

  ngOnDestroy() {
    this.applicantSubscription.unsubscribe();
  }
}
