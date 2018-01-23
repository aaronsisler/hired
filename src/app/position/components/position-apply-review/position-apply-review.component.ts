import { Component, Input } from '@angular/core';
import { AppUser } from 'shared/models/app-user';
import { Document } from 'shared/models/document'

@Component({
  selector: 'app-position-apply-review',
  templateUrl: './position-apply-review.component.html',
  styleUrls: ['./position-apply-review.component.css']
})
export class PositionApplyReviewComponent {
  @Input('user') user: AppUser;
  @Input('documentsSelected') documentsSelected: Document[];

  constructor() {
  }
}
