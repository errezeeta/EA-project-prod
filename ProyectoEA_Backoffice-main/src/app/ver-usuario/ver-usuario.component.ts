import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bar } from '../models/bar';
import { Usuario } from '../models/usuario';
import { BarService } from '../services/bar.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {

  bares : Bar[];
  usuarioForm: FormGroup;
  usuario: Usuario;
  id: String;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private barService: BarService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.usuarioService.getUsuario(this.id).subscribe(data =>{
      this.usuario = data;
      this.usuarioForm = this.formBuilder.group({
        id: [this.usuario.id, [Validators.required, Validators.nullValidator]],
        username: [this.usuario.username, [Validators.required, Validators.nullValidator]],
        password: [this.usuario.password, [Validators.required, Validators.nullValidator]],
        email: [this.usuario.email, [Validators.required, Validators.nullValidator]],
        nombre: [this.usuario.nombre, [Validators.required, Validators.nullValidator]],
        edad: [this.usuario.edad, [Validators.required, Validators.nullValidator]],
        descripcion: [this.usuario.descripcion, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.usuario.imageUrl, [Validators.required, Validators.nullValidator]],
        puntuacion: [this.usuario.puntuacion, [Validators.required, Validators.nullValidator]]
      });
    })

    this.barService.getBarByUser(this.id).subscribe(data =>{
      this.bares = data;
    })
  }

}
