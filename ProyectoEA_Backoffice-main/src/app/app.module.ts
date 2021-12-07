import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatosBaresComponent } from './datos-bares/datos-bares.component';
import { NuevobarComponent } from './nuevobar/nuevobar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarbarComponent } from './modificar-bar/modificar-bar.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { VerBarComponent } from './ver-bar/ver-bar.component';
import { NuevacomunidadComponent } from './nuevacomunidad/nuevacomunidad.component';
import { DatosComunidadesComponent } from './datos-comunidades/datos-comunidades.component';
import { ModificarComunidadComponent } from './modificar-comunidad/modificar-comunidad.component';
import { VerComunidadComponent } from './ver-comunidad/ver-comunidad.component';
import { UsuarioToComunidadComponent } from './usuarioToComunidad/usuarioToComunidad.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatosBaresComponent,
    NuevobarComponent,
    ModificarbarComponent,
    NuevousuarioComponent,
    ModificarUsuarioComponent,
    DatosUsuariosComponent,
    VerUsuarioComponent,
    VerBarComponent,
    NuevacomunidadComponent,
    DatosComunidadesComponent,
    ModificarComunidadComponent,
    VerComunidadComponent,
    UsuarioToComunidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
