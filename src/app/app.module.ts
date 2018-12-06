
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { VacationRequestWizardComponent } from './vacation-request-wizard/vacation-request-wizard.component';
import { VacationRequestHandlingComponent } from './vacation-request-handling/vacation-request-handling.component';
import { TeamCalendarComponent } from './team-calendar/team-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuEmployeeComponent } from './menu-employee/menu-employee.component';
import { MenuOthersComponent } from './menu-others/menu-others.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationApprovalComponent } from './vacation-approval/vacation-approval.component';
import { ButtonAcceptDeclineComponent } from './button-accept-decline/button-accept-decline.component';
import { ButtonContinueBackComponent } from './button-continue-back/button-continue-back.component';
import { RemainingVacationChartComponent } from './remaining-vacation-chart/remaining-vacation-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuEmployeeComponent,
    MenuOthersComponent,
    ProfileComponent,
    TeamCalendarComponent,
    VacationRequestHandlingComponent,
    VacationRequestWizardComponent,
    TeamOverviewComponent,
    VacationApprovalComponent,
    ButtonAcceptDeclineComponent,
    ButtonContinueBackComponent,
    RemainingVacationChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
