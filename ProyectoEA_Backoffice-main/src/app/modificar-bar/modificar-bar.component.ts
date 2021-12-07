import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bar } from '../models/bar';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar-bar.component.html',
  styleUrls: ['./modificar-bar.component.css']
})
export class ModificarbarComponent implements OnInit {

  barForm: FormGroup;
  bar: Bar;
  id: String;
  constructor(private formBuilder: FormBuilder, private barService: BarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.barService.getBar(this.id).subscribe(data =>{
      this.bar = data;
      this.barForm = this.formBuilder.group({
        id: [this.bar.id, [Validators.required, Validators.nullValidator]],
        name: [this.bar.name, [Validators.required, Validators.nullValidator]],
        address: [this.bar.address, [Validators.required, Validators.nullValidator]],
        musicTaste: [this.bar.musicTaste, [Validators.required, Validators.nullValidator]],
        owner: [this.bar.owner, [Validators.required, Validators.nullValidator]],
        idOwner: [this.bar.idOwner, [Validators.required, Validators.nullValidator]],
        aforo: [this.bar.aforo, [Validators.required, Validators.nullValidator]],
        aforoMax: [this.bar.aforoMax, [Validators.required, Validators.nullValidator]],
        horario: [this.bar.horario, [Validators.required, Validators.nullValidator]],
        descripcion: [this.bar.descripcion, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.bar.imageUrl, [Validators.required, Validators.nullValidator]],
      });
    })
  }

  get formControls(){
    return this.barForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarbar(){
    if(this.barForm.invalid){
      return;
    }
    const id = this.barForm.value.id;
    const name = this.barForm.value.name;
    const address = this.barForm.value.address;
    const musicTaste = this.barForm.value.musicTaste;
    const owner = this.barForm.value.owner;
    const idOwner = this.barForm.value.idOwner;
    const aforo = this.barForm.value.aforo;
    const aforoMax = this.barForm.value.aforoMax;
    const horario = this.barForm.value.horario;
    const descripcion = this.barForm.value.descripcion;
    const imageUrl = this.barForm.value.imageUrl;


    const barmodificado = {'id': id, 'name': name, 'address': address, 'musicTaste': musicTaste, "owner": owner, 'idOwner': idOwner, "aforo": aforo, "aforoMax": aforoMax, "horario": horario, "descripcion": descripcion, "imageUrl": imageUrl};
    this.barService.modificarBar(barmodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  delete(){
    const id = this.barForm.value.id;
    this.barService.eliminarBar(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
