import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bar } from '../models/bar';

@Component({
  selector: 'app-datos-bares',
  templateUrl: './datos-bares.component.html',
  styleUrls: ['./datos-bares.component.css']
})
export class DatosBaresComponent implements OnInit {

  @Input()
  bar: Bar;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  ver(){
    this.router.navigate(['verbar/' + this.bar.id]);
  }

  modificar(){
    this.router.navigate(['modificarbar/' + this.bar.id]);
  }


}
