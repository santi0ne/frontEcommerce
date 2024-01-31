import { response } from 'express';
import { Detalle } from '../../interfaces/detalle';

import { DetalleDataService } from '../../servicios/detalle-data.service';

import { Component } from '@angular/core';

import { PagoService } from '../../servicios/pago.service';
import { MatSnackBar,MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  displayedColumns: string[] = ['producto', 'cantidad','anio_publicacion'];
  public detalles: Detalle[] = [];
  public carritoElementos: Detalle[]=[];
  numeroTarjeta: string = '';
  fechaVencimiento: string = '';
  cvv: string = '';
  nombreTitular: string = '';
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  correoUsuario: string = '';
  cedulaUsuario: string = '';
  telefonoUsuario: string = '';
  provincia: string = '';
  ciudad: string = '';
  sector: string = '';
  calleP: string = '';
  calleS: string = '';
  villa: string = '';
  codigoPostal: string = '';


  constructor(private detalleProvider: DetalleDataService,private pagoService: PagoService,private snackBar: MatSnackBar){}

  ngOnInit() {
    this.detalleProvider.getResponse().subscribe((response) => {
      this.detalles = (response as Detalle[]);
    });
    this.pagoService.carrito$.subscribe(carrito => {
      this.carritoElementos = carrito;
    });
  }
  getTotal(): number {
    let total = 0;
    total = this.carritoElementos.reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
    return total;
  }

  pay(){
    console.log(this.carritoElementos);
    const snackBarRef: MatSnackBarRef<any> = this.mostrarMensajeFeedback('Pago realizado con éxito');

    setTimeout(() => {
      snackBarRef.dismiss();
    }, 3000);
    this.cleanData();
  }

  private mostrarMensajeFeedback(mensaje: string): MatSnackBarRef<any> {
    return this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
    });
  }

  private cleanData():void{
    this.apellidoUsuario='';
    this.calleP='';
    this.calleS='';
    this.cedulaUsuario='';
    this.ciudad='';
    this.correoUsuario='';
    this.codigoPostal='';
    this.cvv='';
    this.fechaVencimiento='';
    this.nombreTitular='';
    this.nombreUsuario='';
    this.numeroTarjeta='';
    this.provincia='';
    this.sector='';
    this.telefonoUsuario='';
    this.villa='';
  }
}
