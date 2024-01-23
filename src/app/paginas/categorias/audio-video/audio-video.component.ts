import { Component } from '@angular/core';
import { ProductosdataService } from '../../../servicios/productosdata.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-audio-video',
  templateUrl: './audio-video.component.html',
  styleUrl: './audio-video.component.css'
})
export class AudioVideoComponent {
  constructor(private datap:ProductosdataService){}
  productodata: Producto[]=[];
  
  ngOnInit():void {
    this.datap.getResponse().subscribe((response) => { 
      this.productodata = (response as Producto[]);
    });
  }
  filterProducts(): Producto[] {
    return this.productodata.filter(producto => producto.categoria === 4);
  }
  agregarAlCarrito(p:Producto):void{}

  verDetalle(p:Producto):void{}
}
