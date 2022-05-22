import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseURL="http://localhost:8080/hospital/doctors";
  constructor(private http : HttpClient) { }
  getDoctorList(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseURL);
  }
  createDoctor(doctor:Doctor):Observable<Object>{
    return this.http.post(this.baseURL, doctor);
  }
  updateDoctor(id:number,doctor:Doctor):Observable<Object>{
    console.log("updating doctor");
    return this.http.post(this.baseURL+'/'+id,doctor);
  }
}
