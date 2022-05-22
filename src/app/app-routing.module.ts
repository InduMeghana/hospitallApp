import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorInformationComponent } from './doctor-information/doctor-information.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';

const routes: Routes = [
  {path:'AddPatient',component:AddPatientComponent},
  {path:'create',component:AddDoctorComponent},
  {path:'patients',component:PatientListComponent},
  {path:'createdoctor',component:LoginComponent},
  {path:'doctors',component:DoctorListComponent},
  {path:'getpatient',component:ShowPatientComponent},
  {path:'doctorlist',component:DoctorInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
