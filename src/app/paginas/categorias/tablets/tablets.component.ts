import { Component } from '@angular/core';
import { ProductosdataService } from '../../../servicios/productosdata.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrl: './tablets.component.css'
})
export class TabletsComponent {
  constructor(private datap:ProductosdataService){}
  productodata: Producto[]=[];
  
  ngOnInit():void {
    this.datap.getResponse().subscribe((response) => { 
      this.productodata = (response as Producto[]);
    });
  }
  filterProducts(): Producto[] {
    return this.productodata.filter(producto => producto.categoria === 3);
  }
  agregarAlCarrito(p:Producto):void{}

  verDetalle(p:Producto):void{}
}
