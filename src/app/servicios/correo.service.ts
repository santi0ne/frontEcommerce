import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  enviarCorreo(destinatario: string, asunto: string, mensaje: string): Observable<any> {
    const correoData = {
      destinatario: destinatario,
      asunto: asunto,
      mensaje: mensaje,
    };

    return this.http.post(`${this.URL}/enviar-correo`, correoData);
  }
}
