import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestWizardComponent } from './vacation-request-wizard.component';

describe('VacationRequestWizardComponent', () => {
  let component: VacationRequestWizardComponent;
  let fixture: ComponentFixture<VacationRequestWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationRequestWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationRequestWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
