import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionInternalViewComponent } from './position-internal-view.component';

describe('PositionInternalViewComponent', () => {
  let component: PositionInternalViewComponent;
  let fixture: ComponentFixture<PositionInternalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionInternalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionInternalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
