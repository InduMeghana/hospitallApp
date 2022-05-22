import { Component, getModuleFactory, OnInit } from '@angular/core';
import {PatientsServicesService } from '../patients-services.service';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  doctors:Doctor[];
  doctor:Doctor;
  Specific:Doctor=new Doctor();
  patient:Patient=new Patient();
  message:string='';
  constructor(private patientServices: PatientsServicesService,private doctorservice:DoctorService,private router: Router){ }
  ngOnInit(): void {
    this.doctorservice.getDoctorList().subscribe(data=>{this.doctors=data;});
  }
  savePatient(){
    this.patientServices.createDoctor(this.patient).subscribe(data=>{console.log(data);},error=>console.log(error));
  }
  onsubmission(){
    this.patient.visiteddoctor=this.Specific.name;
    this.Specific.count+=1;
    this.savePatient();
    this.update();
  }
  update(){
    this.doctorservice.updateDoctor(this.Specific.id,this.Specific).subscribe(data=>{console.log(data);},error=>console.log(error));
    this.gotopatients();
  }
  gotopatients(){
    this.router.navigate(['./patients'])
  }
}
