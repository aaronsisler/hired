import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDocumentsComponent } from './admin-user-documents.component';

describe('AdminUserDocumentsComponent', () => {
  let component: AdminUserDocumentsComponent;
  let fixture: ComponentFixture<AdminUserDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
