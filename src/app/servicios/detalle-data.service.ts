import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleDataService {
  private URL: string = 'http://localhost:3000/detalles';

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
}
