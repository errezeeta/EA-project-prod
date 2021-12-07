import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comunidad } from '../models/comunidad';

@Component({
  selector: 'app-datos-comunidades',
  templateUrl: './datos-comunidades.component.html',
  styleUrls: ['./datos-comunidades.component.css']
})
export class DatosComunidadesComponent implements OnInit {

  @Input()
  comunidad: Comunidad;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  ver(){
    this.router.navigate(['vercomunidad/' + this.comunidad.id]);
  }

  modificar(){
    this.router.navigate(['modificarcomunidad/' + this.comunidad.id]);
  }


}
