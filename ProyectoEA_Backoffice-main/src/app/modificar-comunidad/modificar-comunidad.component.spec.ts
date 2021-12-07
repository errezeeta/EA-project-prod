import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarComunidadComponent } from './modificar-comunidad.component';

describe('ModificarComunidadComponent', () => {
  let component: ModificarComunidadComponent;
  let fixture: ComponentFixture<ModificarComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
