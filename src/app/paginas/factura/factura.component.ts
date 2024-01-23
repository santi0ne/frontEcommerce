import { response } from 'express';
import { Detalle } from '../../interfaces/detalle';

import { DetalleDataService } from '../../servicios/detalle-data.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  displayedColumns: string[] = ['producto', 'cantidad','anio_publicacion'];
  public detalles: Detalle[] = []

  constructor(private detalleProvider: DetalleDataService){}

  ngOnInit() {
    this.detalleProvider.getResponse().subscribe((response) => {
      this.detalles = (response as Detalle[]);
    })
  }
}
