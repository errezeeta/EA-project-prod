import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bar } from '../models/bar';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-ver-bar',
  templateUrl: './ver-bar.component.html',
  styleUrls: ['./ver-bar.component.css']
})
export class VerBarComponent implements OnInit {

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

}
