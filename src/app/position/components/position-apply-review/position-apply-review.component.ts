import { Component, OnInit, Input } from '@angular/core';
import { AppUser } from 'shared/models/app-user';

@Component({
  selector: 'app-position-apply-review',
  templateUrl: './position-apply-review.component.html',
  styleUrls: ['./position-apply-review.component.css']
})
export class PositionApplyReviewComponent implements OnInit {
  @Input('documentsSelected') documentsSelected: Document[];
  @Input('user') user: AppUser;

  constructor() { }

  ngOnInit() {
  }

}
