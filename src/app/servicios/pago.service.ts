import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Detalle } from '../interfaces/detalle';
@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private carrito: Detalle[] = [];
  private carritoSubject = new BehaviorSubject<Detalle[]>([]);
  carrito$ = this.carritoSubject.asObservable();
  constructor() { }

  pagar() {

    this.carritoSubject.next(this.carrito);
  }

  setCarrito(carrito: Detalle[]) {
    this.carrito = carrito;
  }
}
