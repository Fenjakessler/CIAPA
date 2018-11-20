import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestAcceptedComponent } from './vacation-request-accepted.component';

describe('VacationRequestAcceptedComponent', () => {
  let component: VacationRequestAcceptedComponent;
  let fixture: ComponentFixture<VacationRequestAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationRequestAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationRequestAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
