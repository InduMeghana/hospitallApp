import { Component, getModuleFactory, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.css']
})
export class DoctorInformationComponent implements OnInit {
  doctors:Doctor[];
  constructor(private doctorservice:DoctorService) { }

  ngOnInit(): void {
    this.getdoctor();
  }
  getdoctor(){
    this.doctorservice.getDoctorList().subscribe(data=>{this.doctors=data});
  }

}
