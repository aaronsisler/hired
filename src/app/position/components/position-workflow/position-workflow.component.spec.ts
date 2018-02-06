import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionWorkflowComponent } from './position-workflow.component';

describe('PositionWorkflowComponent', () => {
  let component: PositionWorkflowComponent;
  let fixture: ComponentFixture<PositionWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
