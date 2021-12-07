import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevobarComponent } from './nuevobar.component';

describe('NuevobarComponent', () => {
  let component: NuevobarComponent;
  let fixture: ComponentFixture<NuevobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevobarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
