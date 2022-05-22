import { Component, OnInit } from '@angular/core';
import { mergeScan } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors : Doctor[];
  Selected:Doctor=new Doctor();
  doctor:Doctor;
  msg:string="";
  constructor(private doctorservice:DoctorService) { }

  ngOnInit(): void {
    this.getDoctor()
  }
  getDoctor() {
    this.doctorservice.getDoctorList().subscribe(data=>{this.doctors=data;});
  }
  onsubmit(){
    this.msg="Doctor Name: "+this.Selected.name+"<br>Doctor age: "+this.Selected.age+"<br>Doctor gender: "+this.Selected.gender+"<br>Doctor specialisation: "+this.Selected.specialization+"<br>cases handled: "+this.Selected.count;
  }
  info(){
    return this.msg;
  }

}
