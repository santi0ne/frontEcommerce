import { Component } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { ProductosdataService } from '../../../servicios/productosdata.service';
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrl: './celulares.component.css'
})
export class CelularesComponent {
  constructor(private datap:ProductosdataService){}
  productodata: Producto[]=[];
  
  ngOnInit():void {
    this.datap.getResponse().subscribe((response) => { 
      this.productodata = (response as Producto[]);
    });
  }
  filterProducts(): Producto[] {
    return this.productodata.filter(producto => producto.categoria === 2);
  }
  agregarAlCarrito(p:Producto):void{
  }
}