import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './paginas/principal/principal.component';

// CATEGORIAS
import { ComputadoraComponent } from './paginas/categorias/computadora/computadora.component';
import { CelularesComponent } from './paginas/categorias/celulares/celulares.component';
import { TabletsComponent } from './paginas/categorias/tablets/tablets.component';
import { AudioVideoComponent } from './paginas/categorias/audio-video/audio-video.component';
import { LaptopsComponent } from './paginas/categorias/laptops/laptops.component';
import { PerifericosComponent } from './paginas/categorias/perifericos/perifericos.component';
import { ConsolasComponent } from './paginas/categorias/consolas/consolas.component';
import { TelevisoresComponent } from './paginas/categorias/televisores/televisores.component';

import { FacturaComponent } from './paginas/factura/factura.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';

import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component'


const routes: Routes = [
  { path: "principal", component: PrincipalComponent },

  // CATEGORIAS
  { path: "computadoras", component: ComputadoraComponent},
  { path: "celulares", component: CelularesComponent},
  { path: "tablets", component: TabletsComponent},
  { path: "audio-video", component: AudioVideoComponent},
  { path: "laptops", component: LaptopsComponent},
  { path: "perifericos", component: PerifericosComponent},
  { path: "consolas", component: ConsolasComponent},
  { path: "televisores", component: TelevisoresComponent},


  { path: "factura", component: FacturaComponent},
  { path: "acercade", component: AcercadeComponent},

  { path: 'detalle-p/:id', component: DetalleProductoComponent },

  { path: "", redirectTo: '/principal', pathMatch: 'full' },
  { path: "**", redirectTo: "principal" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
