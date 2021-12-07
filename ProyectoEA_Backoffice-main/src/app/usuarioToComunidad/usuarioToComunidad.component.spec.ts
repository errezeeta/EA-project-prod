import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioToComunidadComponent } from './usuarioToComunidad.component';

describe('UsuarioToComunidadComponent', () => {
  let component: UsuarioToComunidadComponent;
  let fixture: ComponentFixture<UsuarioToComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioToComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioToComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
