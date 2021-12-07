import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Usuario;
  id: String;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

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
        //
      });
    })
  }

  get formControls(){
    return this.usuarioForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarUsuario(){
    if(this.usuarioForm.invalid){
      return;
    }
    const id = this.usuarioForm.value.id;
    const username = this.usuarioForm.value.username;
    const password = this.usuarioForm.value.password;
    const email = this.usuarioForm.value.email;
    const nombre = this.usuarioForm.value.nombre;
    const edad = this.usuarioForm.value.edad;
    const descripcion = this.usuarioForm.value.descripcion;
    const imageUrl = this.usuarioForm.value.imageUrl;
    const puntuacion = this.usuarioForm.value.puntuacion;

    const usuariomodificado = {'id': id, 'username': username, 'password': password, 'email': email, "nombre": nombre, "edad": edad, "descripcion": descripcion, "imageUrl": imageUrl, "puntuacion": puntuacion};
    this.usuarioService.modificarUsuario(usuariomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  deleteUsuario(){
    const id = this.usuarioForm.value.id;
    this.usuarioService.eliminarUsuario(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
