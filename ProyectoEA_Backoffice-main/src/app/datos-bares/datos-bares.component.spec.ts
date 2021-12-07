import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBaresComponent } from './datos-bares.component';

describe('DatosBaresComponent', () => {
  let component: DatosBaresComponent;
  let fixture: ComponentFixture<DatosBaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosBaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosBaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
