import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBarComponent } from './ver-bar.component';

describe('VerBarComponent', () => {
  let component: VerBarComponent;
  let fixture: ComponentFixture<VerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
