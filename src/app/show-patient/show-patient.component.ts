import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reduce } from 'rxjs';
import { Patient } from '../patient';
import { PatientsServicesService } from '../patients-services.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  value:number;
  patient:Patient=new Patient;
  msg:String="";
  resp:number;
  constructor(private patientservices:PatientsServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.patientservices.GetPatient(this.value).subscribe(data=>{this.patient=data;},response=>{this.resp=response.status;});
   if(this.resp==404){
     this.msg="<b>Resource Not Found</b>";
   }
    else{
      this.msg="Patient name: "+this.patient.name+"<br>Doctor visited:"+this.patient.visiteddoctor;
    }
    }
    content(){
      return this.msg;
    }
}
