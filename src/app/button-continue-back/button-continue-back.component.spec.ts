import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContinueBackComponent } from './button-continue-back.component';

describe('ButtonContinueBackComponent', () => {
  let component: ButtonContinueBackComponent;
  let fixture: ComponentFixture<ButtonContinueBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonContinueBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonContinueBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
