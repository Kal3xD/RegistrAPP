import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  urlApi="http://localhost:3000/"

  obtenerAlumno():Observable<any>
  {
    return this.http.get(this.urlApi +"alumnos").pipe()
  }

  obtenerClase():Observable<any>
  {
    return this.http.get(this.urlApi +"Clase").pipe()
  }
}
