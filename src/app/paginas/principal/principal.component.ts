import { Producto } from '../../interfaces/producto';

import { ProductosdataService } from '../../servicios/productosdata.service'

import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  public productos : Producto[] = [];

  constructor(private productoProvider: ProductosdataService){}

  ngOnInit() {
    this.productoProvider.getResponse().subscribe((response) => { 
      this.productos = (response as Producto[]); 
    })
  }

  agregarAlCarrito(p:Producto):void{
  }

  verDetalle(p:Producto):void{}
}
