import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorInicioComponent } from './buscador-inicio.component';

describe('BuscadorInicioComponent', () => {
  let component: BuscadorInicioComponent;
  let fixture: ComponentFixture<BuscadorInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
