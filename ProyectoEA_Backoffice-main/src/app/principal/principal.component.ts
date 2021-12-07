import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { BarService } from '../services/bar.service';
import { UsuarioService } from '../services/usuario.service';
import { Bar } from '../models/bar';
import { Comunidad } from '../models/comunidad';
import { ComunidadService } from '../services/comunidad.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  bares: Bar[];
  usuarios : Usuario[];
  comunidades: Comunidad[];

  constructor(private router: Router, private barService : BarService, private usuarioService : UsuarioService, private comunidadService: ComunidadService) { }

  ngOnInit(): void {

    this.barService.getBares().subscribe(data =>{
      this.bares = data;
    })

    this.usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    })

    this.comunidadService.getComunidades().subscribe(data =>{
      this.comunidades = data;
    })
  }
  

  nuevoBar(){
    this.router.navigateByUrl('/nuevobar');
  }

  nuevoUsuario(){
    this.router.navigateByUrl('/nuevousuario');
  }

  nuevaComunidad(){
    this.router.navigateByUrl('/nuevacomunidad');
  }

  usuarioToComunidad(){
    this.router.navigateByUrl('/usuariotocomunidad');
  }

}
