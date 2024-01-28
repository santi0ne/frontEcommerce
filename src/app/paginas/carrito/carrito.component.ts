import { Component } from '@angular/core';

import { ProductosdataService } from '../../servicios/productosdata.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  myCart$ = this.productoProvider.myCart$;

  constructor(private productoProvider: ProductosdataService){}

  getTotal(): number {
    let total = 0;
    this.myCart$.subscribe(carrito => {
      total = carrito.reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
    });
    return total;
  }

  deleteItem(id:number){
    this.productoProvider.borrarItem(id);
  }

}
