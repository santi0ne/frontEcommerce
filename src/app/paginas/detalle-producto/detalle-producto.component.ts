import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosdataService } from '../../servicios/productosdata.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  producto: Producto = {} as Producto; // Inicializando con un objeto vacío

  constructor(private productoProvider: ProductosdataService, private route: ActivatedRoute, private router: Router){}

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

}

