import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './paginas/principal/principal.component';
import { FacturaComponent } from './paginas/factura/factura.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';

const routes: Routes = [
  { path: "principal", component: PrincipalComponent },
  { path: "factura", component: FacturaComponent},
  { path: "acercade", component: AcercadeComponent},
  { path: "", redirectTo: '/main', pathMatch: 'full' },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
