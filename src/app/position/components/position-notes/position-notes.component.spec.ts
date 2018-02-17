import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionNotesComponent } from './position-notes.component';

describe('PositionNotesComponent', () => {
  let component: PositionNotesComponent;
  let fixture: ComponentFixture<PositionNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
