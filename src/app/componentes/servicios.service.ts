import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  private rutaServicios: string = 'http://localhost:52532/';
  constructor(private _http: HttpClient) { }


  public guardarPersona(Persona: any): Observable<any> {
    return this._http.post( `${this.rutaServicios}Personas`, Persona);
  }

}
