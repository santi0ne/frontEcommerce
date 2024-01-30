import { response } from 'express';
import { Detalle } from '../../interfaces/detalle';

import { DetalleDataService } from '../../servicios/detalle-data.service';

import { Component } from '@angular/core';

import { PagoService } from '../../servicios/pago.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  displayedColumns: string[] = ['producto', 'cantidad','anio_publicacion'];
  public detalles: Detalle[] = [];
  public carritoElementos: Detalle[]=[];

  constructor(private detalleProvider: DetalleDataService,private pagoService: PagoService){}

  ngOnInit() {
    this.detalleProvider.getResponse().subscribe((response) => {
      this.detalles = (response as Detalle[]);
    });
    this.pagoService.carrito$.subscribe(carrito => {
      this.carritoElementos = carrito;
    });
  }

  elementos(){
    console.log(this.carritoElementos);
  }
}
