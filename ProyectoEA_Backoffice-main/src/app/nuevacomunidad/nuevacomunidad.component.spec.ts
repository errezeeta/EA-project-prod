import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacomunidadComponent } from './nuevacomunidad.component';

describe('NuevacomunidadComponent', () => {
  let component: NuevacomunidadComponent;
  let fixture: ComponentFixture<NuevacomunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevacomunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevacomunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
