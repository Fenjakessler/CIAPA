import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGeneralComponent } from './calendar-general.component';

describe('CalendarGeneralComponent', () => {
  let component: CalendarGeneralComponent;
  let fixture: ComponentFixture<CalendarGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
