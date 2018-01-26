import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSubscriptionComponent } from './position-subscription.component';

describe('PositionSubscriptionComponent', () => {
  let component: PositionSubscriptionComponent;
  let fixture: ComponentFixture<PositionSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
