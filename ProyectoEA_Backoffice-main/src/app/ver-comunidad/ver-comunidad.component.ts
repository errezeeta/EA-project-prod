import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comunidad } from '../models/comunidad';
import { ComunidadService } from '../services/comunidad.service';

@Component({
  selector: 'app-ver-comunidad',
  templateUrl: './ver-comunidad.component.html',
  styleUrls: ['./ver-comunidad.component.css']
})
export class VerComunidadComponent implements OnInit {

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

}
