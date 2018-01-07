import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsSubscribableComponent } from './positions-subscribable.component';

describe('PositionsSubscribableComponent', () => {
  let component: PositionsSubscribableComponent;
  let fixture: ComponentFixture<PositionsSubscribableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionsSubscribableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsSubscribableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
