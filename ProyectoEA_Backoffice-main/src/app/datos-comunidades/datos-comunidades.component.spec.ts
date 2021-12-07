import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosComunidadesComponent } from './datos-comunidades.component';

describe('DatosComunidadesComponent', () => {
  let component: DatosComunidadesComponent;
  let fixture: ComponentFixture<DatosComunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosComunidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosComunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
