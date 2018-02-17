import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionNoteComponent } from './position-note.component';

describe('PositionNoteComponent', () => {
  let component: PositionNoteComponent;
  let fixture: ComponentFixture<PositionNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
