import { Component } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})

export class AcercadeComponent {
  creadores = [
    { nombre: 'Nicolas Coronel', rol: 'Developer', imagen: 'assets/Nicolas.jpeg' },
    { nombre: 'Jeremy Martinez', rol: 'Developer', imagen: 'assets/Jeremy.jpg' },
    { nombre: 'Santiago Rodriguez', rol: 'Developer', imagen: 'assets/Santiago.jpg' }
  ];
}

