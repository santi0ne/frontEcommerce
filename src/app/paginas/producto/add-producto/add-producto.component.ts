import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Producto } from '../../../interfaces/producto'; // Ajusta la ruta según tu estructura
import { ProductosdataService } from '../../../servicios/productosdata.service'

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

  constructor(private fb: FormBuilder, private productoProvider: ProductosdataService) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imagen: ['', Validators.required],
    });
  }

  /*
  agregarProducto(): void {
    const nuevoProducto: Producto = this.productoForm.value;
    // console.log('Nuevo Producto:', nuevoProducto);
    this.productoProvider.agregarProducto(nuevoProducto);
    this.productoForm.reset();
  }*/

  agregarProducto(): void {
    const nuevoProducto = this.productoForm.value;
    this.productoProvider.agregarProducto(nuevoProducto).subscribe(
      (respuesta) => {
        console.log('Producto agregado con éxito:', respuesta);
        // Realiza otras acciones después de agregar el producto, si es necesario
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
        // Maneja el error según tus necesidades
      }
    );
  }
}
