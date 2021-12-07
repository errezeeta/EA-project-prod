import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarbarComponent } from './modificar-bar/modificar-bar.component';
import { NuevobarComponent } from './nuevobar/nuevobar.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { VerBarComponent } from './ver-bar/ver-bar.component';
import { NuevacomunidadComponent } from './nuevacomunidad/nuevacomunidad.component';
import { VerComunidadComponent } from './ver-comunidad/ver-comunidad.component';
import { ModificarComunidadComponent } from './modificar-comunidad/modificar-comunidad.component';
import { UsuarioToComunidadComponent } from './usuarioToComunidad/usuarioToComunidad.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevobar', component: NuevobarComponent},
  { path: 'verbar/:id', component: VerBarComponent},
  { path: 'modificarbar/:id', component: ModificarbarComponent},
  { path: 'nuevousuario', component: NuevousuarioComponent},
  { path: 'verusuario/:id', component: VerUsuarioComponent},
  { path: 'modificarusuario/:id', component: ModificarUsuarioComponent},
  { path: 'nuevacomunidad', component: NuevacomunidadComponent},
  { path: 'vercomunidad/:id', component: VerComunidadComponent},
  { path: 'modificarcomunidad/:id', component: ModificarComunidadComponent},
  { path: 'usuariotocomunidad', component: UsuarioToComunidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
