import { response } from 'express';
import { Detalle } from '../../interfaces/detalle';
import { DetalleDataService } from '../../servicios/detalle-data.service';
import { Component } from '@angular/core';
import { PagoService } from '../../servicios/pago.service';
import { MatSnackBar,MatSnackBarRef } from '@angular/material/snack-bar';
import { CorreoService } from '../../servicios/correo.service';
import { Detalledos } from '../../interfaces/detalledos';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../interfaces/usuario';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  displayedColumns: string[] = ['producto', 'cantidad','anio_publicacion'];
  public detalles: Detalle[] = [];
  public detalles2: Detalledos[] = [];
  public carritoElementos: Detalle[]=[];
  public users: Usuario[]=[];

  numeroTarjeta: string = '';
  fechaVencimiento: string = '';
  cvv: string = '';
  nombreTitular: string = '';
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  correoUsuario: string = "";
  cedulaUsuario: string = '';
  telefonoUsuario: string = '';
  provincia: string = '';
  ciudad: string = '';
  sector: string = '';
  calleP: string = '';
  calleS: string = '';
  villa: string = '';
  codigoPostal: string = '';


  constructor(private detalleProvider: DetalleDataService,
    private pagoService: PagoService,private snackBar: MatSnackBar,
    private correo:CorreoService,private user:UsuarioService){}

  ngOnInit() {
    this.detalleProvider.getResponse().subscribe((response) => {
      this.detalles2 = (response as Detalledos[]);
    });
    this.pagoService.carrito$.subscribe(carrito => {
      this.carritoElementos = carrito;
    });
    this.user.getResponse().subscribe((response)=>{
      this.users= (response as Usuario[]);
    });
  }
  getTotal(): number {
    let total = 0;
    total = this.carritoElementos.reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
    return total;
  }

  pay(){
    const snackBarRef: MatSnackBarRef<any> = this.mostrarMensajeFeedback('Pago realizado con éxito');
    const coreerorender:string=this.correoUsuario;
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 3000);
    setTimeout(() => {
      this.correo.enviarCorreo(coreerorender, 'Confirmacion del pedido', 'Tu pedido ha sido confirmado').subscribe({
        next: () => console.log('Correo enviado con éxito'),
        error: (error) => {
          console.error('Error al enviar el correo', error);
          // Imprimir detalles adicionales del error si están disponibles
          if (error && error.error) {
            console.error('Detalles del error:', error.error);
          }
        },
      });
    }, 3000);
    const ultimoDetid = this.detalles2.length > 0
    ? Math.max(...this.detalles2.map(detalle => detalle.detid || 0))
    : 0;
    const nuevosDetalles: Detalledos[] = this.carritoElementos.map((item, index) => {
      return {
        detid: ultimoDetid + index + 1,
        orden_oid: 1, // Reemplaza con el ID de la orden correspondiente
        producto_pid: item.producto.pid,
        cantidad: item.cantidad,
        fecha: new Date().toISOString() // Reemplaza con la fecha correspondiente
      };
    });
    
    nuevosDetalles.forEach(nuevoDetalle => {
      this.detalleProvider.enviarDetalle(nuevoDetalle).subscribe({
        next: () => console.log('Detalle agregado con éxito'),
        error: (error) => console.error('Error al agregar el detalle', error)
      });
    });
    
    const ultimoUserid = this.users.length > 0
    ? Math.max(...this.users.map(user => user.uid || 0))
    : 0;
    const newUser:Usuario= {
      uid:ultimoUserid+1,
      nombre:this.nombreUsuario,
      apellido:this.apellidoUsuario,
      user:this.generarNombreUsuario(this.nombreUsuario,this.apellidoUsuario),
      password:this.generarContraseñaAleatoria(),
      telefono:this.telefonoUsuario,
      cedula:this.cedulaUsuario,
      correo:this.correoUsuario
    };

    this.user.enviarUsuario(newUser).subscribe((response)=>{
      console.log(response);
    });
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

   generarCadenaAleatoria(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cadenaAleatoria = '';
  
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      cadenaAleatoria += caracteres.charAt(indice);
    }
  
    return cadenaAleatoria;
  }
  
   generarNombreUsuario(nombre: string, apellido: string): string {
    const nombreUsuario = (nombre + apellido).toLowerCase().replace(/\s/g, '') + this.generarCadenaAleatoria(3);
    return nombreUsuario;
  }
  
   generarContraseñaAleatoria(): string {
    return this.generarCadenaAleatoria(5);
  }
  
}
