import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { FacturaComponent } from './paginas/factura/factura.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ComputadoraComponent } from './paginas/categorias/computadora/computadora.component';
import { CelularesComponent } from './paginas/categorias/celulares/celulares.component';
import { TabletsComponent } from './paginas/categorias/tablets/tablets.component';
import { AudioVideoComponent } from './paginas/categorias/audio-video/audio-video.component';
import { LaptopsComponent } from './paginas/categorias/laptops/laptops.component';
import { PerifericosComponent } from './paginas/categorias/perifericos/perifericos.component';
import { ConsolasComponent } from './paginas/categorias/consolas/consolas.component';
import { TelevisoresComponent } from './paginas/categorias/televisores/televisores.component';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FacturaComponent,
    AcercadeComponent,
    MenuComponent,
    ComputadoraComponent,
    CelularesComponent,
    TabletsComponent,
    AudioVideoComponent,
    LaptopsComponent,
    PerifericosComponent,
    ConsolasComponent,
    TelevisoresComponent,
    DetalleProductoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
