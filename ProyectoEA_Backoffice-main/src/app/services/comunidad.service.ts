import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comunidad } from '../models/comunidad'

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  constructor(private http: HttpClient) { }

  
  getComunidades(): Observable<Comunidad[]>{
    return this.http.get<Comunidad[]>(environment.apiURL + "/comunidades");
  }

  
  getComunidad(id: String): Observable<Comunidad>{
    return this.http.get<Comunidad>(environment.apiURL + "/comunidades/getComunidad/" + id);
  }

  getComunidadByUser(idUsuario: String): Observable<Comunidad[]>{
    return this.http.get<Comunidad[]>(environment.apiURL + "/comunidades/getComunidadesByUser/" + idUsuario)
  }

  
  addComunidad(nuevaComunidad: Comunidad): Observable<any>{
    return this.http.post(environment.apiURL + '/comunidades/new', nuevaComunidad);
  }

  
  modificarComunidad(comunidadmodificada: Comunidad, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/comunidades/update/" + id, comunidadmodificada);
  }


  eliminarComunidad(id: String): Observable<any>{
    return this.http.delete<Comunidad>(environment.apiURL + "/comunidades/delete/"+ id);
  }


  addUsuarioToComunidad(idusuario: String, idcomunidad: String): Observable<any>{
    return this.http.put(environment.apiURL + "/comunidades/addUsuario/" + idusuario + "/comunidad/" + idcomunidad, null);
  }

  
  deleteUsuarioToComunidad(idUsuario: String, idcomunidad: String): Observable<any>{
    return this.http.put(environment.apiURL + "/comunidades/deleteUsuario/" + idUsuario + "/comunidad/" + idcomunidad, null);
  }
}
