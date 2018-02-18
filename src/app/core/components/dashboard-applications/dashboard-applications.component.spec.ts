import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationsComponent } from './dashboard-applications.component';

describe('DashboardApplicationsComponent', () => {
  let component: DashboardApplicationsComponent;
  let fixture: ComponentFixture<DashboardApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
