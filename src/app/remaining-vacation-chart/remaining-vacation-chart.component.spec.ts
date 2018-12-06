import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingVacationChartComponent } from './remaining-vacation-chart.component';

describe('RemainingVacationChartComponent', () => {
  let component: RemainingVacationChartComponent;
  let fixture: ComponentFixture<RemainingVacationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingVacationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingVacationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
