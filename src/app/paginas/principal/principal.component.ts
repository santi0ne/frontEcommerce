import { Router } from '@angular/router';

import { Producto } from '../../interfaces/producto';

import { ProductosdataService } from '../../servicios/productosdata.service'

import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  public productos: Producto[] = [];

  constructor(private productoProvider: ProductosdataService, private router: Router) { }

  ngOnInit() {
    this.productoProvider.getResponse().subscribe((response) => {
      this.productos = (response as Producto[]);
    })
  }

  agregarAlCarrito(p: Producto): void {
  }

  verDetalle(p: Producto): void {
    this.router.navigate(['/detalle-p', p.pid]); // Ajusta la ruta y los parámetros según tu necesidad
  }
}