import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarbarComponent } from './modificar-bar.component';

describe('ModificarbarComponent', () => {
  let component: ModificarbarComponent;
  let fixture: ComponentFixture<ModificarbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
