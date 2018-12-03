import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAcceptDeclineComponent } from './button-accept-decline.component';

describe('ButtonAcceptDeclineComponent', () => {
  let component: ButtonAcceptDeclineComponent;
  let fixture: ComponentFixture<ButtonAcceptDeclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAcceptDeclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAcceptDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
