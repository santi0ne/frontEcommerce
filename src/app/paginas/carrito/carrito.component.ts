import { Component } from '@angular/core';

import { ProductosdataService } from '../../servicios/productosdata.service'
import { PagoService } from '../../servicios/pago.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  myCart$ = this.productoProvider.myCart$;

  constructor(private productoProvider: ProductosdataService,private pagoService: PagoService,private router: Router){}

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

  updateUnits(operation:string, id:number){
    const item = this.productoProvider.findItemById(id);
    if(item){
      if(operation === 'minus' && item.cantidad > 0){
        item.cantidad -= 1;
      }
      if(operation === 'add'){
        item.cantidad += 1;
      }
      if(item.cantidad === 0){
        this.deleteItem(id);
      }
    }
  }

  vaciarCarrito(){
    this.productoProvider.deleteCart();
  }

  Pagar(){
    this.myCart$.subscribe(carrito => {
      this.pagoService.setCarrito(carrito);
      
      this.pagoService.pagar();
      console.log(carrito);
    });
    this.router.navigate(['/factura']);

  }
}
