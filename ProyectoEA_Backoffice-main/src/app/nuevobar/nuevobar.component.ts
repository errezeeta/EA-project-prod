import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-nuevobar',
  templateUrl: './nuevobar.component.html',
  styleUrls: ['./nuevobar.component.css']
})
export class NuevobarComponent implements OnInit {

  barForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private barService: BarService, private router: Router) { }

  ngOnInit(): void {
    this.barForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      address: ['', [Validators.required, Validators.nullValidator]],
      musicTaste: ['', [Validators.required, Validators.nullValidator]],
      owner: ['', [Validators.required, Validators.nullValidator]],
      idOwner: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.barForm.controls;
  }

  addbar(): void{
    if(this.barForm.invalid){
      return;
    }
    const id = '0';
    const name = this.barForm.value.name;
    const address = this.barForm.value.address;
    const musicTaste = this.barForm.value.musicTaste;
    const owner = this.barForm.value.owner;
    const idOwner = this.barForm.value.idOwner;
    const aforo = 0;
    const aforoMax = 0;
    const horario = '';
    const descripcion = '';
    const imageUrl = '';


    const bar = {'id': id, 'name': name, 'address': address, 'musicTaste': musicTaste, 'owner': owner, 'idOwner': idOwner, "aforo": aforo, "aforoMax": aforoMax, "horario": horario, "descripcion": descripcion, "imageUrl": imageUrl};
    this.barService.addBar(bar).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
