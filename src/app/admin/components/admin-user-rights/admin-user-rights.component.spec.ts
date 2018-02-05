import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRightsComponent } from './admin-user-rights.component';

describe('AdminUserRightsComponent', () => {
  let component: AdminUserRightsComponent;
  let fixture: ComponentFixture<AdminUserRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
