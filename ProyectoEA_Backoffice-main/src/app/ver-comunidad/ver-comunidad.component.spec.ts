import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComunidadComponent } from './ver-comunidad.component';

describe('VerComunidadComponent', () => {
  let component: VerComunidadComponent;
  let fixture: ComponentFixture<VerComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
