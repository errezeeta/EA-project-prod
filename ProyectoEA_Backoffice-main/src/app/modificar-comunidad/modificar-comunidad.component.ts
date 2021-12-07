import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comunidad } from '../models/comunidad';
import { ComunidadService } from '../services/comunidad.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar-comunidad.component.html',
  styleUrls: ['./modificar-comunidad.component.css']
})
export class ModificarComunidadComponent implements OnInit {

  comunidadForm: FormGroup;
  comunidad: Comunidad;
  id: String;
  constructor(private formBuilder: FormBuilder, private comunidadService: ComunidadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.comunidadService.getComunidad(this.id).subscribe(data =>{
      this.comunidad = data;
      this.comunidadForm = this.formBuilder.group({
        id: [this.comunidad.id, [Validators.required, Validators.nullValidator]],
        name: [this.comunidad.name, [Validators.required, Validators.nullValidator]],
        owner: [this.comunidad.owner, [Validators.required, Validators.nullValidator]],
        idOwner: [this.comunidad.idOwner, [Validators.required, Validators.nullValidator]],
        descripcion: [this.comunidad.descripcion, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.comunidad.imageUrl, [Validators.required, Validators.nullValidator]]

      });
    })
  }

  get formControls(){
    return this.comunidadForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarcomunidad(){
    if(this.comunidadForm.invalid){
      return;
    }
    const id = this.comunidad.id;
    const name = this.comunidadForm.value.name;
    const owner = this.comunidadForm.value.owner;
    const idOwner = this.comunidadForm.value.idOwner;
    const descripcion = this.comunidadForm.value.descripcion;
    const imageUrl = this.comunidadForm.value.imageUrl;

    const comunidadmodificada = {'id': id, 'name': name, "owner": owner, 'idOwner': idOwner, "descripcion": descripcion, "imageUrl": imageUrl};
    this.comunidadService.modificarComunidad(comunidadmodificada, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  delete(){
    const id = this.comunidadForm.value.id;
    this.comunidadService.eliminarComunidad(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
