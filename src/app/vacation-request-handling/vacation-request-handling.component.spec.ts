import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestHandlingComponent } from './vacation-request-handling.component';

describe('VacationRequestHandlingComponent', () => {
  let component: VacationRequestHandlingComponent;
  let fixture: ComponentFixture<VacationRequestHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationRequestHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationRequestHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
