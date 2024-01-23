import { Component } from '@angular/core';
import { ProductosdataService } from '../../../servicios/productosdata.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-televisores',
  templateUrl: './televisores.component.html',
  styleUrl: './televisores.component.css'
})
export class TelevisoresComponent {
  constructor(private datap:ProductosdataService){}
  productodata: Producto[]=[];
  
  ngOnInit():void {
    this.datap.getResponse().subscribe((response) => { 
      this.productodata = (response as Producto[]);
    });
  }
  filterProducts(): Producto[] {
    return this.productodata.filter(producto => producto.categoria === 8);
  }
  agregarAlCarrito(p:Producto):void{
  }
}
