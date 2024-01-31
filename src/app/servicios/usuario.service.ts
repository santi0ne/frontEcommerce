import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
  // Método para realizar una petición POST
  enviarUsuario(user: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Convierte el objeto detalle a formato JSON
    const detalleJSON = JSON.stringify(user);

    return this.http.post(this.URL, detalleJSON, { headers });
  }
}
