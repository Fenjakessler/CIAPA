
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { VacationRequestWizardComponent } from './vacation-request-wizard/vacation-request-wizard.component';
import { VacationRequestHandlingComponent } from './vacation-request-handling/vacation-request-handling.component';
import { VacationRequestAcceptedComponent } from './vacation-request-accepted/vacation-request-accepted.component';
import { TeamCalendarComponent } from './team-calendar/team-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarGeneralComponent } from './calendar-general/calendar-general.component';
import { LoginComponent } from './login/login.component';
import { MenuEmployeeComponent } from './menu-employee/menu-employee.component';
import { MenuOthersComponent } from './menu-others/menu-others.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarGeneralComponent,
    LoginComponent,
    MenuEmployeeComponent,
    MenuOthersComponent,
    ProfileComponent,
    TeamCalendarComponent,
    VacationRequestAcceptedComponent,
    VacationRequestHandlingComponent,
    VacationRequestWizardComponent,
    TeamOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
