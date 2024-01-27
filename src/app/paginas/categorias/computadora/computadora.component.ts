import { Router } from '@angular/router'
import { Component } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { ProductosdataService } from '../../../servicios/productosdata.service';
@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.component.html',
  styleUrl: './computadora.component.css'
})
export class ComputadoraComponent {
  productodata: Producto[] = [];

  constructor(private datap: ProductosdataService, private router: Router) { }

  ngOnInit(): void {
    this.datap.getResponse().subscribe((response) => {
      this.productodata = (response as Producto[]);
    });
  }

  filterProducts(): Producto[] {
    return this.productodata.filter(producto => producto.categoria === 1);
  }

  agregarAlCarrito(p: Producto): void { }

  verDetalle(p: Producto): void {
    this.router.navigate(['/detalle-p', p.pid]);
  }
}
