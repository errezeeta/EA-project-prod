import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComunidadService } from '../services/comunidad.service';

@Component({
  selector: 'app-usuarioToComunidad',
  templateUrl: './usuarioToComunidad.component.html',
  styleUrls: ['./usuarioToComunidad.component.css']
})
export class UsuarioToComunidadComponent implements OnInit {

  comunidadForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private comunidadService: ComunidadService, private router: Router) { }

  ngOnInit(): void {
    this.comunidadForm = this.formBuilder.group({
      idusuario: ['', [Validators.required, Validators.nullValidator]],
      idcomunidad: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.comunidadForm.controls;
  }

  usuarioToComunidad(): void{
    if(this.comunidadForm.invalid){
      return;
    }

    const idusuario = this.comunidadForm.value.idusuario;
    const idcomunidad = this.comunidadForm.value.idcomunidad;

    this.comunidadService.addUsuarioToComunidad(idusuario, idcomunidad).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  delete(): void{
    if(this.comunidadForm.invalid){
      return;
    }

    const idusuario = this.comunidadForm.value.idusuario;
    const idcomunidad = this.comunidadForm.value.idcomunidad;

    this.comunidadService.deleteUsuarioToComunidad(idusuario, idcomunidad).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}