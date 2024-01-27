import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductosdataService } from '../../../servicios/productosdata.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrl: './perifericos.component.css'
})
export class PerifericosComponent {
  productodata: Producto[] = [];

  constructor(private datap: ProductosdataService, private router: Router) { }

  ngOnInit(): void {
    this.datap.getResponse().subscribe((response) => {
      this.productodata = (response as Producto[]);
    });
  }

  filterProducts(): Producto[] {
    return this.productodata.filter(producto => producto.categoria === 6);
  }

  agregarAlCarrito(p: Producto): void { }

  verDetalle(p: Producto): void {
    this.router.navigate(['/detalle-p', p.pid]);
  }
}
