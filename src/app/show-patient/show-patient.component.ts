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
    this.patientservices.GetPatient(this.value).subscribe(data=>{this.patient=data;},error=>{this.res=error});
   if(this.res!=undefined){
     this.msg="<b>Resource Not Found</b>";
     this.res=undefined;
   }
    else{
      this.msg="Patient name: "+this.patient.name+"<br>Doctor visited:"+this.patient.visiteddoctor;
      this.patient=undefined;
    }
    }
    content(){
      return this.msg;
    }
}
