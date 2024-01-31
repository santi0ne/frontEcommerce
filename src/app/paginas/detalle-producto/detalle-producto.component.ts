import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosdataService } from '../../servicios/productosdata.service';

import { MatSnackBar,MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  producto: Producto = {} as Producto; // Inicializando con un objeto vacío

  constructor(private productoProvider: ProductosdataService, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];

      this.productoProvider.getResponse().subscribe((productos: Producto[]) => {
        const productoEncontrado = productos.find((p) => p.pid === productId);

        if (productoEncontrado) {
          this.producto = productoEncontrado;
        } else {
          console.error('Producto no encontrado');
          this.router.navigate(['/error']);
        }
      });
    });
  }

  addToCart(p:Producto){
    this.productoProvider.addProduct(p);
  }

  private mostrarMensajeFeedback(mensaje: string): MatSnackBarRef<any> {
    return this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
    });
  }

  eliminarProducto(id: number): void {
    this.productoProvider.eliminarProducto(id).subscribe(
      () => {
        console.log('Producto eliminado con éxito');
        this.router.navigate(['/principal']);
        const snackBarRef: MatSnackBarRef<any> = this.mostrarMensajeFeedback('Producto eliminado con éxito!');
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 3000);
      },
      error => {
        console.error('Error al eliminar producto', error);
        const snackBarRef: MatSnackBarRef<any> = this.mostrarMensajeFeedback('Error al eliminar producto!');
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 3000);
      }
    );
  }

}

