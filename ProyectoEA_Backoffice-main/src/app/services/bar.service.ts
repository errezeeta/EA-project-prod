import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bar } from '../models/bar'

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) { }

  
  getBares(): Observable<Bar[]>{
    return this.http.get<Bar[]>(environment.apiURL + "/bares");
  }

  
  getBar(id: String): Observable<Bar>{
    return this.http.get<Bar>(environment.apiURL + "/bares/getBar/" + id);
  }

  getBarByUser(idUsuario: String): Observable<Bar[]>{
    return this.http.get<Bar[]>(environment.apiURL + "/bares/getBaresByUser/" + idUsuario)
  }

  
  addBar(nuevobar: Bar): Observable<any>{
    return this.http.post(environment.apiURL + '/bares/new', nuevobar);
  }

  
  modificarBar(barmodificado: Bar, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/bares/update/" + id, barmodificado);
  }


  eliminarBar(id: String): Observable<any>{
    return this.http.delete<Bar>(environment.apiURL + "/bares/delete/"+ id);
  }
}
