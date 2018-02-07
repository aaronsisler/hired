import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionApplySuccessComponent } from './position-apply-success.component';

describe('PositionApplySuccessComponent', () => {
  let component: PositionApplySuccessComponent;
  let fixture: ComponentFixture<PositionApplySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionApplySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionApplySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
