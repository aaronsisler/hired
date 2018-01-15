import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionApplyComponent } from './position-apply.component';

describe('PositionApplyComponent', () => {
  let component: PositionApplyComponent;
  let fixture: ComponentFixture<PositionApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
