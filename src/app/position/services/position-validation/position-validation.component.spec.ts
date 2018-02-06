import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionValidationComponent } from './position-validation.component';

describe('PositionValidationComponent', () => {
  let component: PositionValidationComponent;
  let fixture: ComponentFixture<PositionValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
