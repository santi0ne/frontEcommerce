import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from './../interfaces/producto';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosdataService {
  private URL: string = 'http://localhost:3000/productos';
  //?format=json
  constructor(private http: HttpClient) {}

  getResponse(): Observable<Producto[]> { // Especifica el tipo de retorno como Observable<Producto[]>
    return this.http.get<Producto[]>(this.URL); // Especifica el tipo de datos como Producto[]
  }
}
