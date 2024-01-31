import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Producto } from './../interfaces/producto';
import { Detalle } from './../interfaces/detalle';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosdataService {
  private URL: string = 'http://localhost:3000/productos';

  /*
  // lista de producto
  private productos: Producto[] = []

  // producto observable
  private productosSubject = new BehaviorSubject<Producto[]>(this.productos);
  productos$ = this.productosSubject.asObservable();
*/
  // lista carrito
  private myList: Detalle[] = [];

  // carrito observable
  private myCart = new BehaviorSubject<Detalle[]>([]);
  myCart$ = this.myCart.asObservable();

  //?format=json
  constructor(private http: HttpClient) { }

  getResponse(): Observable<Producto[]> { // Especifica el tipo de retorno como Observable<Producto[]>
    return this.http.get<Producto[]>(this.URL); // Especifica el tipo de datos como Producto[]
  }

  addProduct(p: Producto) {
    const existingItem = this.myList.find(item => item.producto.pid === p.pid);
  
    if (existingItem) {
      existingItem.cantidad += 1;
    } else {
      const newItem: Detalle = { producto: p, cantidad: 1 };
      this.myList.push(newItem);
    }
  
    this.myCart.next([...this.myList]);  // Emitir una nueva copia del carrito
  }

  borrarItem(id:number){
    this.myList = this.myList.filter((item)=>{
      return item.producto.pid != id
    })
    this.myCart.next(this.myList);
  }

  findItemById(id:number){
    return this.myList.find((item)=>{
      return item.producto.pid === id;
    })
  }

  deleteCart(){
    this.myList = [];
    this.myCart.next([...this.myList]);
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Producto>(this.URL, producto, { headers });
  }
  
}
