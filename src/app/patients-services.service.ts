import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsServicesService {

  private baseURL="http://localhost:8080/hospital/patient";
  constructor(private http : HttpClient) { }
  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL);
  }
  createDoctor(patient:Patient):Observable<Object>{
    console.log(patient);
    return this.http.post(this.baseURL, patient);
  }
  GetPatient(id:number):Observable<Patient>{
    console.log("method started");
    return this.http.get<Patient>(this.baseURL+'/'+id);
  }
}
