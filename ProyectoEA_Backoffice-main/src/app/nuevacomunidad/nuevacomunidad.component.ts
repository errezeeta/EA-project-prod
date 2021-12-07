import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComunidadService } from '../services/comunidad.service';

@Component({
  selector: 'app-nuevacomunidad',
  templateUrl: './nuevacomunidad.component.html',
  styleUrls: ['./nuevacomunidad.component.css']
})
export class NuevacomunidadComponent implements OnInit {

  comunidadForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private comunidadService: ComunidadService, private router: Router) { }

  ngOnInit(): void {
    this.comunidadForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      owner: ['', [Validators.required, Validators.nullValidator]],
      idOwner: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.comunidadForm.controls;
  }

  addcomunidad(): void{
    if(this.comunidadForm.invalid){
      return;
    }
    const id = '';
    const name = this.comunidadForm.value.name;
    const owner = this.comunidadForm.value.owner;
    const idOwner = this.comunidadForm.value.idOwner;
    const descripcion = '';
    const imageUrl = '';


    const comunidad = {'id': id, 'name': name, 'owner': owner, 'idOwner': idOwner, 'descripcion': descripcion, 'imageUrl': imageUrl};
    this.comunidadService.addComunidad(comunidad).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
