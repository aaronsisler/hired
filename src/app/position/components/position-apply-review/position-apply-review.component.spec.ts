import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionApplyReviewComponent } from './position-apply-review.component';

describe('PositionApplyReviewComponent', () => {
  let component: PositionApplyReviewComponent;
  let fixture: ComponentFixture<PositionApplyReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionApplyReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionApplyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
