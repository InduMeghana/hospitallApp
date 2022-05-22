import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientsServicesService } from '../patients-services.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:Patient[];

  constructor(private patientservice:PatientsServicesService) { }

  ngOnInit(): void {
    this.getPatient();
  }
  getPatient() {
    this.patientservice.getPatientList().subscribe(data=>{this.patients=data;});
  }
}
