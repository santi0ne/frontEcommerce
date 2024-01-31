import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductosdataService } from '../../../servicios/productosdata.service'

import { MatSnackBar,MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.css'
})
export class AddProductoComponent implements OnInit{
  productoForm: FormGroup = this.fb.group({
    categoria: ['', Validators.required],
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    imagen: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private productoProvider: ProductosdataService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imagen: ['', Validators.required],
    });
  }

  private mostrarMensajeFeedback(mensaje: string): MatSnackBarRef<any> {
    return this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
    });
  }

  agregarProducto(): void {
    const nuevoProducto = this.productoForm.value;
    this.productoProvider.agregarProducto(nuevoProducto).subscribe(
      (respuesta) => {
        console.log('Producto agregado con éxito:', respuesta);
        const snackBarRef: MatSnackBarRef<any> = this.mostrarMensajeFeedback('Producto agregado con éxito!');
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 3000);
        this.productoForm.reset();
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
        const snackBarRef: MatSnackBarRef<any> = this.mostrarMensajeFeedback('Error al agregar producto!');
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 3000);
      }
    );
  }


}
