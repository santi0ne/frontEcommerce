import { Component } from '@angular/core';

import { ProductosdataService } from '../app/servicios/productosdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
  viewCarrito: boolean = false;
  myCart$ = this.productProvider.myCart$;

  constructor(private productProvider: ProductosdataService){}

  onToggleCarrito(){
    this.viewCarrito = !this.viewCarrito;
  }
}
