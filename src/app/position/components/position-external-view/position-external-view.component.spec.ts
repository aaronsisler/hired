import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionExternalViewComponent } from './position-external-view.component';

describe('PositionExternalViewComponent', () => {
  let component: PositionExternalViewComponent;
  let fixture: ComponentFixture<PositionExternalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionExternalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionExternalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
