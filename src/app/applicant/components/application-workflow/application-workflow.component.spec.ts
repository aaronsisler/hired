import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationWorkflowComponent } from './application-workflow.component';

describe('ApplicationWorkflowComponent', () => {
  let component: ApplicationWorkflowComponent;
  let fixture: ComponentFixture<ApplicationWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
