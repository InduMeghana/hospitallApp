import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { FormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { LoginComponent } from './login/login.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { DoctorInformationComponent } from './doctor-information/doctor-information.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    AddDoctorComponent,
    AddPatientComponent,
    PatientListComponent,
    LoginComponent,
    ShowPatientComponent,
    DoctorInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
